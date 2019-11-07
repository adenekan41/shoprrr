import React from 'react';
import './preview-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { addItem, toggleCartHidden } from '../../redux/cart/cart.actions';
import {connect} from 'react-redux'

const PreviewItem = ({item, addItem, toggleCart}) => {
    const {id, name, price ,imageUrl} = item
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url('${imageUrl}')`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}.00</span>

            </div>
            <CustomButton className="custom-button" theme="inverted" onClick={() => {
                    addItem(item)
                    setTimeout(function(){ toggleCart() }, 2000);
                }}>ADD TO CART</CustomButton>
            
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    toggleCart: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(PreviewItem)