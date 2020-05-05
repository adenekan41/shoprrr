import React from 'react';
import PropTypes from 'prop-types';
import './preview-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const PreviewItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}.00</span>
      </div>
      <CustomButton
        className="custom-button"
        theme="inverted"
        onClick={() => {
          addItem(item);
        }}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

PreviewItem.propTypes = {
  item: PropTypes.object,
  addItem: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(PreviewItem);
