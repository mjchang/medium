import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const AttributeButton = styled(Button).attrs(props => {
  const { type = 'button' } = props;
  return { type };
})``;

const AttributesExample = () => {
  return (
    <div>
      <h2>Attributes</h2>
      <p>Use the attrs method to attach extra props to the Styled Component.</p>
      <AttributeButton onClick={() => alert('clicked!')}>
        Button
      </AttributeButton>
    </div>
  );
};

export default AttributesExample;
