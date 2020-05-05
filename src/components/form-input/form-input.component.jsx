import React from 'react';
import './form-input.styles.scss';
import PropTypes from 'prop-types';
const FormInput = ({ handelChange, label, ...rest }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handelChange} {...rest} />
      {label ? (
        <label
          className={`${rest.value.length ? 'shrink' : ''} form-input-label`}
          aria-label={label}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

FormInput.propTypes = {
  handelChange: PropTypes.func,
  label: PropTypes.string,
};

export default FormInput;
