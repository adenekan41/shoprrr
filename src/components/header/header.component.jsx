import React from 'react'

// import {Link} from 'react-router-dom';
// import './header.styles.scss';
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({currentUser, hidden, signOut}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"></Logo>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {
                    currentUser ? 
                    (
                        <OptionLink as="div" to="#!" onClick={signOut}>
                            SIGN OUT
                        </OptionLink>
                    ):(
                        <OptionLink to="/signin">
                            SIGN IN
                        </OptionLink>
                    )
                }
                <CartIcon />
            </OptionsContainer>
            {hidden && (
                <CartDropdown />
            )}
            
        </HeaderContainer>
    )
} 

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)