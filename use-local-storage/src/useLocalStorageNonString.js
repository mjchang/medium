import { useCallback, useState } from 'react';

export function useLocalStorageNonString(key, initialState) {
  const serializedInitialState = JSON.stringify(initialState);
  let storageValue = initialState;
  try {
    storageValue = JSON.parse(localStorage.getItem(key)) ?? initialState;
  } catch {
    localStorage.setItem(key, serializedInitialState);
  }
  const [value, setValue] = useState(storageValue);
  const updatedSetOption = useCallback(
    newOption => {
      const serializedNewOption = JSON.stringify(newOption);
      if (
        serializedNewOption === serializedInitialState ||
        typeof newOption === 'undefined'
      ) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, serializedNewOption);
      }
      setValue(newOption);
    },
    [initialState, serializedInitialState, key]
  );
  return [value, updatedSetOption];
}

export default useLocalStorageNonString;
