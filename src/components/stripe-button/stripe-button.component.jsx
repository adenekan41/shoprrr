import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey = 'pk_test_AuB1VG6KH2D8cKLyT79kqdmp00WIGqvW4u';
  const onToken = token => {
    console.log(token);
    alert('Payment Successfull');
  };
  return (
    <StripeCheckout
      label={`Pay $${price} Now`}
      name="Shoprrr"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/10kLgBV/favicon-copy.png"
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel={`Pay $${price} Now`}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

StripeCheckoutButton.propTypes = {
  price: PropTypes.number,
};

export default StripeCheckoutButton;
