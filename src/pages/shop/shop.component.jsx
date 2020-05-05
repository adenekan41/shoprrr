import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import categoryContainer from '../category/category.container';
import collectionsContainer from '../../components/collections-overview/collections-overview.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styled from 'styled-components';

class ShopPage extends React.Component {
  componentWillMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;
    const timeout = { enter: 800, exit: 0 };
    const { location } = this.props;
    const currentKey = location.pathname.split('/shop')[1] || '/';
    return (
      <ShopContainer>
        <div className="containe">
          <TransitionGroup component="div" className="App">
            <CSSTransition
              key={currentKey}
              timeout={timeout}
              classNames="pageSlider"
              mountOnEnter={false}
              unmountOnExit={true}
            >
              <div className="fades">
                <Route
                  exact
                  path={`${match.path}`}
                  component={collectionsContainer}
                />
                <Route
                  path={`${match.path}/:categoryId`}
                  component={categoryContainer}
                />
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </ShopContainer>
    );
  }
}

const ShopContainer = styled.div`
  .bannerItems {
    // background-blend-mode: overlay;
    // background-color: #00000070;
    // color:#fff;
    margin: 0 0 1rem;
  }
`;

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(withRouter(ShopPage));
