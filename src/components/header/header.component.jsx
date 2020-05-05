import React from 'react';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import { withRouter } from 'react-router-dom';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { ReactComponent as Logo } from '../../assets/shoprr.svg';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { signOutStart } from '../../redux/user/user.actions';
import styled from 'styled-components';

const Header = ({ currentUser, hidden, signOut }) => {
  return (
    <HeaderContainer>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid={true}>
          <Navbar.Brand href="#home" as={Link} to="/" aria-label="Header">
            {' '}
            <Logo className="logo"></Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/" aria-label="Home">
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/shop"
                activeClassName="is-active"
                aria-label="Shop"
              >
                Shop
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                activeClassName="is-active"
                aria-label="Contact"
              >
                Contact
              </Nav.Link>
              {currentUser ? (
                <NavDropdown
                  title={currentUser.displayName}
                  id="basic-nav-dropdown"
                  drop="left"
                >
                  <NavDropdown.Item>{currentUser.email}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={signOut}>
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link
                  as={NavLink}
                  to="/auth"
                  activeClassName="is-active"
                  aria-label="Signin"
                >
                  Sign In
                </Nav.Link>
              )}

              <Nav.Link aria-label="Cart Icon">
                <CartIcon />
              </Nav.Link>
              {hidden && <CartDropdown />}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.span`
  nav {
    background: #fff !important;
    margin-bottom: 7px;
    .navbar-toggler {
      color: rgba(0, 0, 0, 0.5);
      border-color: rgba(255, 255, 255, 0.1) !important;
    }
  }
  .is-active {
    color: #00afaf !important;
    font-weight: 700;
    border-bottom: 2px solid #00afaf;
  }
  svg {
    height: 40px;
  }
  @media (max-width: 585px) {
    .navbar-brand {
      svg {
        left: -4rem !important;
      }
    }
  }
  @media (max-width: 989px) {
    /* CSS FOR TABLETS */
    .navbar-brand {
      svg {
        left: -4rem !important;
      }
    }
  }
  @media (max-width: 220px) {
    .navbar-brand {
      svg {
        left: -4rem !important;
      }
    }
  }
  .navbar-brand {
    svg {
      position: absolute;
      left: -2rem;
      margin: -1rem auto;
    }
  }
`;

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool,
  signOut: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
