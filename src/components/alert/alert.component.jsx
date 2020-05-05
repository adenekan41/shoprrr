import React from 'react';
import { Alert } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectAlertItems } from '../../redux/alert/alert.selector';
import styled from 'styled-components';
import { removeAlert } from '../../redux/alert/alert.actions';

const AlertContainer = styled(Alert)`
  position: fixed;
  top: -1px;
  z-index: 9999;
  width: 300px;
  right: -10px;

  .h4 {
    font-size: 20px;
    font-family: blorado;
    text-transform: capitalize;
    font-weight: 800;
    color: #fff;
    margin: 0 0 8px;
  }

  h5 {
    position: absolute;
    right: 16px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    z-index: 9999;
  }
  p {
    font-size: 14px;
    color: #fff;
    margin: 0;
  }

  .alert-success {
    width: 100%;
    padding: 13px 20px;
    background: #70ce74;
    border: none;
    margin-left: auto;
  }
  .alert-danger {
    width: 100%;
    padding: 13px 20px;
    background: #da4a3f;
    border: none;
    margin-left: auto;
  }
`;
const Alerts = ({ alerts, removeAlert }) => (
  <AlertContainer>
    {alerts !== null &&
      alerts.length > 0 &&
      alerts.map(alert => (
        <Alert variant={`${alert.alertType}`}>
          <h5 onClick={() => removeAlert(alert.id)}>&#10005;</h5>
          <Alert.Heading>
            {alert.alertType === 'success' ? alert.alertType : 'Error'}
          </Alert.Heading>
          <p>{alert.msg}</p>
        </Alert>
      ))}
  </AlertContainer>
);
const mapStateToProps = createStructuredSelector({
  alerts: selectAlertItems,
});
const mapDispatchToProps = dispatch => ({
  removeAlert: id => dispatch(removeAlert(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
