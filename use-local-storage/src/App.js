import React from 'react';

import useLocalStorage from './useLocalStorage';

const App = () => {
  const [value, setValue] = useLocalStorage('key', 'initial');
  return (
    <>
      <h1>LocalStorage Hook</h1>
      <input onChange={e => setValue(e.target.value)} value={value ?? ''} />
      <div>
        <button onClick={() => setValue()} type="button">
          Clear LocalStorage
        </button>
      </div>
    </>
  );
};

export default App;
