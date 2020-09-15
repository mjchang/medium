import React from 'react';
import PropTypes from 'prop-types';

// use macro to achieve the same as babel-plugin-styled-components plugin
// must use this with create-react-app. If ejected, use babel-plugin-styled-components plugin
import styled, { createGlobalStyle } from 'styled-components/macro';

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

const StylePropButton = styled(Button)`
  ${props => props.$style ?? {}}
`;

// const App = () => {
//   return (
//     <StylePropButton
//       $style={{ backgroundColor: '#007bff' }}
//       onClick={() => alert('clicked!')}
//       type="button"
//     >
//       Button
//     </StylePropButton>
//   );
// };

// const App = () => {
//   return (
//     <Button as="a" href="https://styled-components.com/">
//       Link
//     </Button>
//   );
// };

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

// const App = () => {
//   return (
//     <>
//       <GlobalStyle />
//       <Button onClick={() => alert('clicked!')} type="button">
//         Link
//       </Button>
//     </>
//   );
// };

const AttributeButton = styled(Button).attrs(props => {
  const { type = 'button' } = props;
  return { type };
})``;

// const App = () => {
//   return (
//     <AttributeButton onClick={() => alert('clicked!')}>
//       Button
//     </AttributeButton>
//   );
// };

const DefaultPropsButton = styled(Button)``;
DefaultPropsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};
DefaultPropsButton.defaultProps = {
  type: 'button',
};

// const App = () => {
//   return (
//     <DefaultPropsButton onClick={() => alert('clicked!')}>
//       Button
//     </DefaultPropsButton>
//   );
// };

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <h1>Styled Components Advanced Demo</h1>
      <div>
        <h2>Style Prop</h2>
        <StylePropButton
          $style={{ backgroundColor: '#28a745' }}
          onClick={() => alert('clicked!')}
          type="button"
        >
          Style Object
        </StylePropButton>
      </div>
      <div>
        <h2>Dynamic Components</h2>
        <Button as="a" href="https://styled-components.com/">
          Link
        </Button>
      </div>
      <div>
        <h2>Attributes</h2>
        <AttributeButton onClick={() => alert('clicked!')}>
          Attribute
        </AttributeButton>
      </div>
      <div>
        <h2>Default</h2>
        <DefaultPropsButton onClick={() => alert('clicked!')} type="button">
          Default Props
        </DefaultPropsButton>
      </div>
    </div>
  );
};

export default App;
