import React from 'react';

import Button from './Button';

const DynamicComponentExample = () => {
  return (
    <div>
      <h2>Dynamic Components</h2>
      <p>Use the as prop to dynamically redefine the component rendered.</p>
      <Button as="a" href="https://styled-components.com/">
        Link
      </Button>
    </div>
  );
};

export default DynamicComponentExample;
