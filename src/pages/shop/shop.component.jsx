import React, { Component } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom'
import CategoryPage from '../category/category.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
// import { fetchcollectionStart } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.components';
import { createStructuredSelector } from 'reselect';
import { selectisLoading } from '../../redux/shop/shop.selectors';
import categoryContainer from '../category/category.container';
import collectionsContainer from '../../components/collections-overview/collections-overview.container';
// import { fetchcollectionStart, fetchCollectionAsync } from '../../redux/shop/shop.saga';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
// const CategoryPageWithSpinner = WithSpinner(CategoryPage)
class ShopPage extends React.Component {
  
    componentDidMount() {
        const {  fetchCollectionsStart } = this.props;
        fetchCollectionsStart()
        // fetchcollectionStart
    }
    render(){
        const {match} = this.props
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={collectionsContainer} />
                {/* <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}></CollectionsOverviewWithSpinner>} /> */}
                {/* <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={isLoading} {...props}></CategoryPageWithSpinner>} /> */}
                <Route path={`${match.path}/:categoryId`} component={categoryContainer} />
            </div>
        )
    }
}
// const mapStateToProps = createStructuredSelector({
//     isLoading: selectisLoading
// })
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
export default connect(null, mapDispatchToProps)(ShopPage)