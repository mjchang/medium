import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const PropTypesButton = styled(Button)``;
PropTypesButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};
PropTypesButton.defaultProps = {
  type: 'button',
};

const PropTypesExample = () => {
  return (
    <div>
      <h2>Style Object</h2>
      <p>Attach propTypes and defaultProps exactly like React Components.</p>
      <PropTypesButton onClick={() => alert('clicked!')}>
        Button
      </PropTypesButton>
    </div>
  );
};

export default PropTypesExample;
