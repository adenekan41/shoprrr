import React, { Component } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom'
import CategoryPage from '../category/category.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateShopData } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.components';
import { createStructuredSelector } from 'reselect';
import { selectisLoading } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CategoryPageWithSpinner = WithSpinner(CategoryPage)
class ShopPage extends React.Component {
  
    componentDidMount() {
        const {updateShopData} = this.props
        updateShopData()
    }
    render(){
        const {match, isLoading} = this.props
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}></CollectionsOverviewWithSpinner>} />
                <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={isLoading} {...props}></CategoryPageWithSpinner>} />
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    isLoading: selectisLoading
})
export default connect(mapStateToProps, {updateShopData})(ShopPage)