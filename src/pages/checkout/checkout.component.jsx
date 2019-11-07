import React from 'react'
import {connect} from 'react-redux'
import './checkout.styles.scss'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import { Link } from 'react-router-dom'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import CustomButton from '../../components/custom-button/custom-button.component'
const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <h1>Checkout</h1> <br /><br />
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Qunatity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <div className="total">
                <span>Total ${total}</span>
            </div>
            {
                cartItems && (
                    <>
                    <div className="test-warning">
                        *Please use the following test credit card for payments its a test project of course*
                        <br/>
                        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123 
                    </div>
                    <StripeCheckoutButton price={total} /> <CustomButton as={Link} to="/shop">Continue Shopping</CustomButton>
                    </>
                )
            }
            
        </div>

    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps,null)(CheckoutPage)