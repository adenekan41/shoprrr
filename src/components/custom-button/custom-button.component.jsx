import React from 'react';
import PropTypes from 'prop-types';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...rest }) => {
  return <CustomButtonContainer {...rest}>{children}</CustomButtonContainer>;
};

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default CustomButton;
