import { renderHook } from '@testing-library/react-hooks';

import * as hooks from './hooks';

describe('useDeepCompareMemo', () => {
  test('should not update if the same value', () => {
    const factory = () => new Date().getTime();
    const dependencies = ['a', 1, true, [1, 2, 3], { a: 'b' }];
    const { rerender, result } = renderHook(
      args => hooks.useDeepCompareMemo(...args),
      {
        initialProps: [factory, dependencies],
      }
    );
    const original = result.current;
    rerender([factory, ['a', 1, true, [1, 2, 3], { a: 'b' }]]);
    expect(result.current).toEqual(original);
    rerender([factory, ['a', 1, true, [1, 2, 3], { a: 'updated' }]]);
    expect(result.current).toBeGreaterThan(original);
  });
});
