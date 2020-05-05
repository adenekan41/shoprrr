import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Directory from '../../components/directory/directory.component';
import { Container } from 'react-bootstrap';
import CustomButton from '../../components/custom-button/custom-button.component';
import BannerItem from '../../components/banner-item/banner-item.component';

const Homepage = () => {
  return (
    <>
      <HompageWrapper className="">
        <BannerItem
          className="bannerItem mx-0 mx-md-5"
          background="https://i.ibb.co/nP6R16G/S1.jpg"
          bannerheight="680px"
          bannertype="center"
        >
          <div className="flex_arrange">
            <p>New Arrivals</p>
            <h1>
              Enjoy This <br /> Summer Trends
            </h1>
            <p>On Eligible Items in order of $100 or more</p>
            <CustomButton as={Link} to="/shop">
              Shop Now
            </CustomButton>
          </div>
        </BannerItem>
      </HompageWrapper>
      <DirectoryContainer>
        <Directory />
      </DirectoryContainer>

      <ArivalWrapper className="mx-0 mx-md-5">
        <BannerItem
          className="bannerItem"
          background="https://i.ibb.co/vBBdqxq/slider1-hp4.jpg"
          bannerheight="400px"
          bannertype="left"
        >
          <div className="flex_arrange">
            <h1>
              New <br /> Arrival
            </h1>
            <p>On Eligible Items in stock for now</p>
          </div>
        </BannerItem>
        <BannerItem
          className="bannerItem"
          background="https://i.ibb.co/V9P7SDS/slider3-hp4.jpg"
          bannerheight="400px"
          bannertype="left"
        >
          <div className="flex_arrange">
            <h1>
              Summer <br /> Sales Off
            </h1>
            <p>On Eligible Items off pricess in stock</p>
          </div>
        </BannerItem>
      </ArivalWrapper>
    </>
  );
};

const HompageWrapper = styled.div`
  margin: 0 0 2.5rem;
  .bannerItem {
    a {
      width: auto !important;
      min-width: auto !important;
      display: inline-block;
      margin-top: 2rem;
    }
    button {
      margin: 2rem auto 0;
    }
  }
`;

const ArivalWrapper = styled.div`
  margin: 2rem 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  .bannerItem {
    padding: 0px 20px;
    h1 {
      font-weight: 700;
      font-size: 40px;
      margin: 1rem 0;
    }
    p {
      margin: 0;
    }
    button {
      margin: 2rem auto 0;
    }
  }
`;
const DirectoryContainer = styled(Container)``;
export default Homepage;
