import React from 'react'
import { Alert } from 'react-bootstrap'
import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux'
import { selectAlertItems } from '../../redux/alert/alert.selector'
import styled from 'styled-components'
const AlertContainer = styled(Alert)`
    width: 360px;
    position: fixed;
    top: 29px;
    right: 21px;
    z-index:9999;
    right: 43px;
 .h4 {
    font-size: 20px;
    font-family: blorado;
    text-transform: capitalize;
    font-weight: 800;
    color: #fff;
    margin: 0 0 8px;
}

 p {
    font-size: 14px;
    color: #fff;
    margin: 0;
}
.alert-success {
    width: 360px;
    padding: 13px 20px;
    background: #70ce74;
    border: none;
}
.alert-danger {
    width: 360px;
    padding: 13px 20px;
    background: #da4a3f;
    border: none;
}
`
const Alerts = ({alerts}) => (
    <AlertContainer>
        {
            alerts !== null && alerts.length > 0 && alerts.map(alert => (
                <Alert variant={`${alert.alertType}`}>
                    <Alert.Heading>{alert.alertType === 'success' ? alert.alertType : 'Error'}</Alert.Heading>
                    <p>
                        {alert.msg}
                    </p>
                </Alert>
            ))
        }
    
    </AlertContainer>
        
)
const mapStateToProps = createStructuredSelector({
    alerts: selectAlertItems
})
export default connect(mapStateToProps)(Alerts);