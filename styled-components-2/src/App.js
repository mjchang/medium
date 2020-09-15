import React from 'react';
import { createGlobalStyle } from 'styled-components';

import AttributesExample from './AttributesExample';
import DynamicComponentExample from './DynamicComponentExample';
import StyleObjectExample from './StyleObjectExample';
import PropTypesExample from './PropTypesExample';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Styled Components Advanced Demo</h1>
      <StyleObjectExample />
      <DynamicComponentExample />
      <AttributesExample />
      <PropTypesExample />
    </>
  );
};

export default App;
