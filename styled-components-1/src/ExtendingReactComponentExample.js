import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const ButtonComponent = ({ className }) => {
  return (
    <Button
      className={className}
      onClick={() => alert('clicked!')}
      type="button"
    >
      Primary
    </Button>
  );
};

const PrimaryButton = styled(ButtonComponent)`
  background-color: #007bff;
  :hover {
    background-color: #0069d9;
  }
`;

const ExtendingReactComponentExample = () => {
  return (
    <div>
      <h2>Extending React Components</h2>
      <p>Extend an existing React Component with Styled Components.</p>
      <PrimaryButton onClick={() => alert('clicked!')} type="button">
        Primary
      </PrimaryButton>
    </div>
  );
};

export default ExtendingReactComponentExample;
