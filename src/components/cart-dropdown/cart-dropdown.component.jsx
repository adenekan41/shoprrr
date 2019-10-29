import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss'
import { withRouter } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
const CartDropdown = ({cartItems, history,dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? (
                    cartItems.map(cartItem => (
                       <CartItem key={cartItem.id} item={cartItem}/>   
                    ))
                    ):(
                        <span className="empty-message">Your Cart Is Empty</span>
                    )
                }
                
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                 dispatch(toggleCartHidden())
            } }>GO TO CHECKOUT</CustomButton>
        </div>
    ) 
}
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
// const mapDispatchToProps = dispatch => ({
//     toggleHidden: () => dispatch(toggleCartHidden())
// })  
export default connect(mapStateToProps)(withRouter(CartDropdown))