import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../assets/shoppingbag.svg'
import {connect} from 'react-redux'
import './cart-icon.styles.scss'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
const CartIcon = (props) => {
    const {toggleCartHidden, itemCount} = props
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <span className="item-count">{itemCount}</span>
        </div>
    )
     }
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    // itemCount: cartItems.reduce((accumulatedQuantity , cartItem) => (
    //     accumulatedQuantity + cartItem.quantity
    // ),0) 
    itemCount: selectCartItemsCount
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)