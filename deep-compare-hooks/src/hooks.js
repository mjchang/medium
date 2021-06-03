import { useMemo, useRef } from 'react';
import lodashIsEqual from 'lodash.isequal';

export function useDeepCompareMemo(factory, dependencies) {
  const ref = useRef([]);
  if (!lodashIsEqual(dependencies, ref.current)) {
    ref.current = dependencies;
  }
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  return useMemo(factory, ref.current);
}
