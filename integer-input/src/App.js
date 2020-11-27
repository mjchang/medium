import React from 'react';
import { useState } from 'react';

import IntegerInput from './IntegerInput';

const App = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <h1>Integer Input</h1>
      <IntegerInput onChange={setValue} value={value} />
    </>
  );
};

export default App;
