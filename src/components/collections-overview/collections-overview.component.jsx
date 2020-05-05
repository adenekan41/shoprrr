import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';
import PropTypes from 'prop-types';
import BannerItem from '../banner-item/banner-item.component';
import TabDiv from '../tab-div/tab-div.components';

const CollectionsOverview = ({ collections }) => {
  return (
    <>
      <BannerItem
        bannertype={'center'}
        background={'https://i.ibb.co/G0XJb1R/S2.jpg'}
        className="mx-0 mx-md-5 bannerItems"
        bannerheight="500px"
      >
        <div className="flex_arrange">
          <h1>Featured Shop</h1>
          <p>On Eligible Items in order of $100 or more</p>
        </div>
      </BannerItem>
      <div className="container">
        <div className="shop-page">
          <TabDiv></TabDiv>
          {collections.map(collection => {
            return <PreviewCollection key={collection.id} {...collection} />;
          })}
        </div>
      </div>
    </>
  );
};

CollectionsOverview.propTypes = {
  collections: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps, null)(CollectionsOverview);
