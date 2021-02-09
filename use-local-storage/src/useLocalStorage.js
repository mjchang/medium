import { useCallback, useState } from 'react';

function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(localStorage.getItem(key) ?? initialState);
  const updatedSetOption = useCallback(
    newOption => {
      if (newOption === initialState || typeof newOption === 'undefined') {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, newOption);
      }
      setValue(newOption ?? initialState);
    },
    [initialState, key]
  );
  return [value, updatedSetOption];
}

export default useLocalStorage;
