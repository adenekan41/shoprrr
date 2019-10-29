import React from 'react'
import { CustomButtonContainer } from './custom-button.styles'
 
// import './custom-button.styles.scss'
const CustomButton = ({children, ...rest}) => {
    return (
        <CustomButtonContainer {...rest}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton