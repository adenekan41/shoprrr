import React from 'react'
import {Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom';
// import './header.styles.scss';
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import { withRouter} from 'react-router-dom'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { ReactComponent as Logo }  from '../../assets/shoprr.svg'
import { createStructuredSelector } from 'reselect';
// import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';
import styled from 'styled-components'

const HeaderContainer = styled.span`
    nav{
        background: #fff !important;
        margin-bottom: 7px;
        .navbar-toggler {
            color: rgba(0,0,0,.5);
            border-color: rgba(255, 255, 255, 0.1) !important;
        }
    }
    .is-active{
        color: #00afaf !important;
        font-weight: 700;
        border-bottom: 2px solid #00afaf;
    }
    svg{
        height: 40px;
    }
    .navbar-brand{
        svg{
            position:absolute;
            left: -2rem;
            margin:-1rem auto;
        }
    }
`
const Header = ({currentUser, hidden, signOut, match}) => {
    // console.log(match)
    return (
        <HeaderContainer>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid={true}>
                    <Navbar.Brand href="#home" as={Link} to="/"> <Logo className="logo"></Logo></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className='ml-auto'>
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/shop" activeClassName='is-active'>Shop</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" activeClassName='is-active'>Contact</Nav.Link>
                            {
                                currentUser ? (
                                    <NavDropdown title={currentUser.displayName} id="basic-nav-dropdown" drop='left'>
                                        <NavDropdown.Item >{currentUser.email}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={signOut}>Sign Out</NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <Nav.Link as={NavLink} to="/auth" activeClassName='is-active'>Sign In</Nav.Link>
                                )
                            }
                            
                            <Nav.Link><CartIcon /></Nav.Link>
                            {hidden && (
                                <CartDropdown />
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </HeaderContainer>
        
        // <HeaderContainer>
        //     <LogoContainer to="/">
        //         <Logo className="logo"></Logo>
        //     </LogoContainer>
        //     <OptionsContainer>
        //         <OptionLink to="/shop">SHOP</OptionLink>
        //         <OptionLink to="/contact">CONTACT</OptionLink>
        //         {
        //             currentUser ? 
        //             (
        //                 <OptionLink as="div" to="#!" onClick={signOut}>
        //                     SIGN OUT
        //                 </OptionLink>
        //             ):(
        //                 <OptionLink to="/signin">
        //                     SIGN IN
        //                 </OptionLink>
        //             )
        //         }
        //         <CartIcon />
        //     </OptionsContainer>
            // {hidden && (
            //     <CartDropdown />
            // )}
            
        // </HeaderContainer>
    )
} 

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))