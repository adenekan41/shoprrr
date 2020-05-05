import React, { memo } from 'react';
import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <FooterLayout>
      <div className="container-fluid px-0 px-md-5">
        <h1>Stay In Touched</h1>
        <p>Get Briefings from our shop experts today.</p>
        <CustomButton as={Link} to="/contact" className="custom-button">
          Contact Us
        </CustomButton>
        <hr />
        <Nav defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="ml-md-auto mr-auto mr-md-0">
            <Nav.Link href="https://twitter.com/code_wonders">
              @codewonders
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </FooterLayout>
  );
};

const FooterLayout = styled.div`
  text-align: center;
  padding: 3rem 0 1rem;
  .custom-button {
    width: auto !important;
    min-width: auto !important;
    display: inline-block;
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }
`;

export default memo(FooterComponent);
