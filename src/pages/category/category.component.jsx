import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import PreviewItem from '../../components/preview-item/preview-item.component';
import { Link } from 'react-router-dom';
import './category.styles.scss';

import BannerItem from '../../components/banner-item/banner-item.component';
import TabDiv from '../../components/tab-div/tab-div.components';

const CategoryPage = ({ match, category }) => {
  const { items } = category;

  return (
    <>
      <BannerItem
        bannertype={'center'}
        background={'https://i.ibb.co/nP6R16G/S1.jpg'}
        className="mx-0 mx-md-5 bannerItems"
        bannerheight="500px"
      >
        <div className="flex_arrange">
          <h1>
            {match.params.categoryId
              ? match.params.categoryId.toUpperCase()
              : 'Featured Shop'}
          </h1>
          <p>
            {match.params.categoryId ? (
              <>
                <Link to="/shop">Shop > </Link>
                <b>{match.params.categoryId}</b>
              </>
            ) : (
              'On Eligible Items in order of $100 or more'
            )}
          </p>
        </div>
      </BannerItem>
      <div className="container">
        <TabDiv></TabDiv>
        <div className="collection-page">
          <div className="items">
            {items.map(item => (
              <PreviewItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

CategoryPage.propTypes = {
  category: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCollection(ownProps.match.params.categoryId)(state),
});
export default connect(mapStateToProps)(CategoryPage);
