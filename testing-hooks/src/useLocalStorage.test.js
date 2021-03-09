import { act, renderHook } from '@testing-library/react-hooks';

import useLocalStorage from './useLocalStorage';

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

const key = 'KEY';

test('should return localStorage value', () => {
  localStorage.setItem(key, 'value');
  const { result } = renderHook(() => useLocalStorage(key));
  expect(result.current).toStrictEqual(['value', expect.any(Function)]);
});

test('should return the default value', () => {
  const initialState = 'default';
  const { result } = renderHook(() => useLocalStorage(key, initialState));
  expect(result.current).toStrictEqual(['default', expect.any(Function)]);
});

test('should update when set is called', () => {
  const initialState = 'default';
  const { result } = renderHook(() => useLocalStorage(key, initialState));
  expect(result.current).toStrictEqual(['default', expect.any(Function)]);
  const [, setValue] = result.current;
  act(() => {
    setValue('value');
  });
  expect(localStorage.getItem(key)).toEqual('value');
  expect(result.current).toStrictEqual(['value', expect.any(Function)]);
});

test('should remove key from localStorage if default is set', () => {
  localStorage.setItem(key, 'value');
  const initialState = 'default';
  const { result } = renderHook(() => useLocalStorage(key, initialState));
  expect(result.current).toStrictEqual(['value', expect.any(Function)]);
  const [, setValue] = result.current;
  act(() => {
    setValue('default');
  });
  expect(localStorage.getItem(key)).toBeNull();
  expect(result.current).toStrictEqual(['default', expect.any(Function)]);
});

test('should remove key from localStorage if updated to undefined', () => {
  localStorage.setItem(key, 'value');
  const initialState = 'default';
  const { result } = renderHook(() => useLocalStorage(key, initialState));
  expect(result.current).toStrictEqual(['value', expect.any(Function)]);
  const [, setValue] = result.current;
  act(() => {
    setValue();
  });
  expect(localStorage.getItem(key)).toBeNull();
  expect(result.current).toStrictEqual(['default', expect.any(Function)]);
});
