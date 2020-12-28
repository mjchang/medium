import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const { className, onChange, type, value } = props;
  return (
    <input
      className={className}
      onChange={e => onChange(e.target.value)}
      type={type}
      value={value}
    />
  );
};
Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(['number', 'password', 'text']),
};
Input.defaultProps = {
  className: undefined,
  value: '',
  type: 'text',
};

export default Input;
