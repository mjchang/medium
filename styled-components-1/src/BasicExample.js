import React from 'react';

import Button from './Button';

const ButtonExample = () => {
  return (
    <div>
      <h2>Basic Styled Components</h2>
      <p>Use template literal to define Styled Component styles.</p>
      <Button onClick={() => alert('clicked!')} type="button">
        Button
      </Button>
    </div>
  );
};

export default ButtonExample;
