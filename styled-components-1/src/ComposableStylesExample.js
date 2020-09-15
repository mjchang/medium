import React from 'react';
import styled, { css } from 'styled-components';

import Button from './Button';

const blackFont = css`
  color: black;
`;

const WarningButton = styled(Button)`
  background-color: #ffc107;
  :hover {
    background-color: #e0a800;
  }
  ${blackFont}
`;

const ComposableStylesExample = () => {
  return (
    <div>
      <h2>Composable Styles</h2>
      <p>
        Use the css helper to define generic styles to be used in Styled
        Components.
      </p>
      <WarningButton onClick={() => alert('clicked!')} type="button">
        Warning
      </WarningButton>
    </div>
  );
};

export default ComposableStylesExample;
