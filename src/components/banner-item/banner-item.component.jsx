import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import styled,{ css } from 'styled-components'
import {Link} from 'react-router-dom'
const BannerWrapper = styled.div`
    background: url(${props => props.background});
    height: ${props => props.bannerheight ? props.bannerheight : '400px'};
    border-radius: 7px;
    background-position: center;
    background-size: cover;
    display:flex;
    ${props => props.bannertype === "center" ? 
    css`
        align-items: center;
        text-align:center;
        justify-content:center;
    ` : props.bannertype === "left" ? css`
        align-items: center;
        justify-content:flex-start;
    `: css`align-items:center`};
    h1{
        font-weight: 700;
        font-size: 43px;
        margin: 1rem 0;
    }
    p{ 
        margin: 0;
    }
`
const BannerItem = ({background, children, bannerheight, ...rest}) => {
    return (
        <BannerWrapper {...{background, bannerheight, ...rest}}>
            <div className="bannerItem">
                <div className="container">
                   {children}
                </div>
            </div>
        </BannerWrapper>
        
    )
}

export default BannerItem