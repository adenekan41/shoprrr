import React from 'react'
 
import './custom-button.styles.scss'
const CustomButton = ({children, ...rest}) => {
    return (
        <button className={`${rest.theme} custom-button`} {...rest}>
            {children}
        </button>
    )
}

export default CustomButton