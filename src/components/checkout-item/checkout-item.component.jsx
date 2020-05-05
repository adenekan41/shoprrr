import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.styles.scss';
import PropTypes from 'prop-types';
import { removeItem, addItem, clearItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItem, addItem, clearItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} aria-label={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => clearItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}.00</span>
      <div className="remove-button" onClick={() => removeItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
  removeItem: PropTypes.func,
  addItem: PropTypes.func,
  clearItem: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  clearItem: item => dispatch(clearItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
