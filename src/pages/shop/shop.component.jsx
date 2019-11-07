import React, { Component } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route, Link, withRouter} from 'react-router-dom'
// import CategoryPage from '../category/category.component';
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
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import BannerItem from '../../components/banner-item/banner-item.component';
import { Container } from 'react-bootstrap';
import styled from 'styled-components'
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
// const CategoryPageWithSpinner = WithSpinner(CategoryPage)
const ShopContainer = styled.div`
    .bannerItems{
        // background-blend-mode: overlay;
        // background-color: #00000070;
        // color:#fff;
        margin: 0 0 1rem;
    }
`
class ShopPage extends React.Component {
  
    componentWillMount() {
        const {  fetchCollectionsStart } = this.props;
        fetchCollectionsStart()
        // fetchcollectionStart
    }
    render(){
        const {match} = this.props
        const timeout = { enter:800, exit: 0 };
            const { location } = this.props;
            const currentKey = location.pathname.split('/shop')[1] || '/'
        return(
            <ShopContainer >
                <div className="containe">
                    <TransitionGroup component="div" className="App">
                        <CSSTransition key={currentKey} timeout={timeout} classNames="pageSlider" mountOnEnter={false} unmountOnExit={true}>
                            <div className="fades">
                                <Route exact path={`${match.path}`} component={collectionsContainer} />
                                {/* <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}></CollectionsOverviewWithSpinner>} /> */}
                                {/* <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={isLoading} {...props}></CategoryPageWithSpinner>} /> */}
                                <Route path={`${match.path}/:categoryId`} component={categoryContainer} />
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </ShopContainer>
        )
    }
}
// const mapStateToProps = createStructuredSelector({
//     isLoading: selectisLoading
// })
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
export default connect(null, mapDispatchToProps)(withRouter(ShopPage))