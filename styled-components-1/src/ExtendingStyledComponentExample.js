import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const PrimaryButton = styled(Button)`
  background-color: #007bff;
  :hover {
    background-color: #0069d9;
  }
`;

const ExtendingStyledComponentExample = () => {
  return (
    <div>
      <h2>Extending Styled Components</h2>
      <p>Extend an existing Styled Component with more styles.</p>
      <PrimaryButton onClick={() => alert('clicked!')} type="button">
        Primary
      </PrimaryButton>
    </div>
  );
};

export default ExtendingStyledComponentExample;
