import React from 'react';
import PropTypes from 'prop-types';

const IntegerInput = props => {
  const { onChange, value } = props;
  return (
    <input
      onChange={e => onChange(e.target.value)}
      onKeyPress={e => {
        if (!/[-\d]/.test(e.key)) {
          e.preventDefault();
        }
      }}
      type="number"
      value={value}
    />
  );
};
IntegerInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
IntegerInput.defaultProps = {
  value: '',
};

export default IntegerInput;
