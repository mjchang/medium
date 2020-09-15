import React from 'react';

import BasicExample from './BasicExample';
import ComposableStylesExample from './ComposableStylesExample';
import ExtendingReactComponentExample from './ExtendingReactComponentExample';
import ExtendingStyledComponentExample from './ExtendingStyledComponentExample';
import StylingPropsExample from './StylingPropsExample';

const App = () => {
  return (
    <>
      <h1>Styled Components Demo</h1>
      <BasicExample />
      <ExtendingStyledComponentExample />
      <ExtendingReactComponentExample />
      <ComposableStylesExample />
      <StylingPropsExample />
    </>
  );
};

export default App;
