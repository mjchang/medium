import React from 'react';
import styled from 'styled-components';

import './app.css';

const App = () => {
  return <h1>Stylelint Demo</h1>;
};

const Component = styled.div`
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  font-size: 12px !important; /* stylelint-disable-line declaration-no-important */

  /* stylelint-disable */
  :focus {
    outline: none;
  }
  /* stylelint-enable */
`;

export default App;
