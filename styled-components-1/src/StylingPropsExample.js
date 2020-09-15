import React from 'react';
import styled, { css } from 'styled-components';

import Button from './Button';

const SuccessButton = styled(Button)`
  ${props =>
    props.$success
      ? css`
          background-color: #28a745;
          :hover {
            background-color: #218838;
          }
        `
      : ''}
`;

const StylingPropsExample = () => {
  return (
    <div>
      <h2>Styling Props</h2>
      <p>Use props to modify Styled Component styling.</p>
      <SuccessButton $success onClick={() => alert('clicked!')} type="button">
        Success
      </SuccessButton>
    </div>
  );
};

export default StylingPropsExample;
