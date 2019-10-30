import React, { Component } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom'
import CategoryPage from '../category/category.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateShopData } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.components';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CategoryPageWithSpinner = WithSpinner(CategoryPage)
class ShopPage extends React.Component {
    constructor(){
        super();
        this.state = {
            loading:true
        }
    }
    unsubscribeFromSnapShot = null;
    componentDidMount() {
        const { updateShopData } = this.props
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateShopData(collectionsMap)
            this.setState({ loading: false })
        }) 
    }
    componentWillUnmount(){
        this.unsubscribeFromSnapShot()
    }
    render(){
        const {match} = this.props
        const {loading} = this.state
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}></CollectionsOverviewWithSpinner>} />
                <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={loading} {...props}></CategoryPageWithSpinner>} />
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateShopData: shopdata => dispatch(updateShopData(shopdata))
})
export default connect(null, mapDispatchToProps)(ShopPage)