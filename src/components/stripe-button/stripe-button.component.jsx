import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStrip = price * 100
    const publishableKey = 'pk_test_AuB1VG6KH2D8cKLyT79kqdmp00WIGqvW4u'
    const onToken = token => {
        console.log(token)
        alert("Payment Successfull")
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/Cuz.svg"
            description= {`Your total is $${price}`}
            amount={priceForStrip}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton