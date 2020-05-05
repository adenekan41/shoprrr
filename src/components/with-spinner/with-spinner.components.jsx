import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

WithSpinner.propTypes = {
  isLoading: PropTypes.bool,
};

export default WithSpinner;
