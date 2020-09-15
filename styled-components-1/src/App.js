import React from 'react';

import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  color: white;
  background-color: #6c757d;
  border: none;
  border-radius: 4px;

  :not(:disabled) {
    cursor: pointer;
  }

  :hover {
    background-color: #5a6268;
  }
`;

// const App = () => {
//   return (
//     <Button onClick={() => alert('clicked!')} type="button">
//       Button
//     </Button>
//   );
// };

const PrimaryButton = styled(Button)`
  background-color: #007bff;
  :hover {
    background-color: #0069d9;
  }
`;

// const App = () => {
//   return (
//     <PrimaryButton onClick={() => alert('clicked!')} type="button">
//       Primary
//     </PrimaryButton>
//   );
// };

// const App = ({ className }) => {
//   return (
//     <PrimaryButton
//       className={className}
//       onClick={() => alert('clicked!')}
//       type="button"
//     >
//       Primary
//     </PrimaryButton>
//   );
// };
//
// const StyledApp = styled(App)`
//   ...
// `;

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

// const App = () => {
//   return (
//     <WarningButton onClick={() => alert('clicked!')} type="button">
//       Primary
//     </WarningButton>
//   );
// };

export const StylingPropsButton = styled(Button)`
  ${props =>
    props.$width
      ? css`
          width: ${props.$width};
        `
      : ''}
`;

// const App = () => {
//   return (
//     <StylingPropsButton $width="200px" onClick={() => alert('clicked!')} type="button">
//       Button
//     </Button>
//   );
// };

const App = () => {
  return (
    <div>
      <h1>Styled Components Demo</h1>
      <div>
        <h2>Basic</h2>
        <Button onClick={() => alert('clicked!')} type="button">
          Button
        </Button>
      </div>
      <div>
        <h2>Extending Components</h2>
        <PrimaryButton onClick={() => alert('clicked!')} type="button">
          Primary
        </PrimaryButton>
      </div>
      <div>
        <h2>Composable Styles</h2>
        <WarningButton onClick={() => alert('clicked!')} type="button">
          Warning
        </WarningButton>
      </div>
      <div>
        <h2>Styling Props</h2>
        <StylingPropsButton
          $width="200px"
          onClick={() => alert('clicked!')}
          type="button"
        >
          Wide
        </StylingPropsButton>
      </div>
    </div>
  );
};

export default App;
