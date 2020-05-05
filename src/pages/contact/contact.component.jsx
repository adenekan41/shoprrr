import React from 'react';
import BannerItem from '../../components/banner-item/banner-item.component';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

class Contact extends React.Component {
  render() {
    return (
      <ContactContainer>
        <BannerItem
          className="mx-0 mx-md-5"
          background="https://i.ibb.co/LCFPn7t/Contact-pageheading.jpg"
          bannerheight="500px"
          bannertype="center"
        >
          <div className="flex_arrange">
            <h1>Contact Us</h1>
          </div>
        </BannerItem>
        <Container>
          <h4 className="text-center">
            Frontend developer and Javascript engineer, Photochromic Lens
            enthusiast, practicing minimalist, and Pop Music & Jazz lover in
            search of flow. Working with my hands to make magic happen on the
            internet. View my Projects, Articles, Resumé, Contact Me, or send me
            an email at hellocodewonders@gmail.com.
          </h4>
          <hr />
          <div className="col-md-7 m-auto">
            <div className="card">
              <p>
                Email: <b>hellocodewonders@gmail.com</b>
              </p>
              <p>
                Website:{' '}
                <b>
                  <a href="https://codewonders.dev">www.codewonders.dev</a>
                </b>
              </p>
              <p>
                Twitter:{' '}
                <b>
                  <a href="https://twitter.com/code_wonders">Twitter Profile</a>
                </b>
              </p>
              <p>
                LinkedIn:{' '}
                <b>
                  <a href="https://linkedin.com/in/codewonders">
                    Linked Profile
                  </a>
                </b>
              </p>
            </div>
          </div>
        </Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63424.99731036789!2d3.3428604204207115!3d6.513795018382699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c5959a15ead%3A0xf6ea8f81597164e9!2sCafe%20Neo!5e0!3m2!1sen!2sng!4v1573062905684!5m2!1sen!2sng"
          width="600"
          height="450"
          title="Contact Map"
          frameborder="0"
          style={{ border: 0, width: '100%' }}
          allowfullscreen=""
        ></iframe>
      </ContactContainer>
    );
  }
}

const ContactContainer = styled.div`
  h4 {
    font-size: 20px;
    line-height: 40px;
    font-weight: 400;
    color: #949494;
    margin-top: 3rem;
  }
  .card {
    background: #f5f5f5;
    border: none;
    margin: 3rem auto;
    padding: 40px;
  }
  p {
    font-size: 18px;
    a {
      font-size: 18px;
    }
    b {
      font-size: 18px;
    }
  }
`;

export default Contact;
