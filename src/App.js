import React from 'react';
import './App.css';
import Homepage from './pages/hompage/hompage.component';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-signup/sign-in-and-sign-up.components';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';

import FooterComponent from './components/footer/footer.component';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from './pages/contact/contact.component';
import Alerts from './components/alert/alert.component';
class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {}

  render() {
    const timeout = { enter: 800, exit: 400 };
    const { location, currentUser } = this.props;

    const currentKey = location.pathname.split('/')[1] || '/';
    return (
      <>
        <Header />
        <Alerts></Alerts>
        <TransitionGroup component="div" className="App">
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames="pageSlider"
            mountOnEnter={false}
            unmountOnExit={true}
          >
            <div className="fades">
              <Switch location={location}>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
                <Route
                  path="/auth"
                  render={() =>
                    currentUser ? (
                      <Redirect to="/"></Redirect>
                    ) : (
                      <SignInSignUp></SignInSignUp>
                    )
                  }
                />
                <Route path="/contact" component={Contact} />
                <Route exact path="/checkout" component={CheckoutPage} />
              </Switch>
              {location.pathname.includes('auth') ? <></> : <FooterComponent />}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
