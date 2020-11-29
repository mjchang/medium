import React from 'react';

import HorizontalCSSScrollShadow from './HorizontalCSSScrollShadow';
import HorizontalJSScrollShadow from './HorizontalJSScrollShadow';
import VerticalCSSScrollShadow from './VerticalCSSScrollShadow';
import VerticalJSScrollShadow from './VerticalJSScrollShadow';

const App = () => {
  return (
    <>
      <h1>Vertical CSS Scroll Shadow</h1>
      <VerticalCSSScrollShadow />
      <h1>Horizontal CSS Scroll Shadow</h1>
      <HorizontalCSSScrollShadow />
      <h1>Vertical JS Scroll Shadow</h1>
      <VerticalJSScrollShadow />
      <h1>Horizontal JS Scroll Shadow</h1>
      <HorizontalJSScrollShadow />
    </>
  );
};

export default App;
