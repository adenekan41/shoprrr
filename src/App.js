import React from 'react';
import './App.css';
import Homepage from './pages/hompage/hompage.component';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-signup/sign-in-and-sign-up.components';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends React.Component {
  
  unsubscribeFromAuth = null
  
  componentDidMount() {
    const {setCurrentUser, collectionsArray} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          })
        }) 
      }
      else{
        setCurrentUser(userAuth)
        // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
      }
    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"></Redirect>) : (<SignInSignUp></SignInSignUp>)}/>
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </Router>
  );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
