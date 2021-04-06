import React, { lazy, Suspense } from 'react';

const PrefetchLoad = lazy(() =>
  import(
    /* webpackPrefetch: true, webpackChunkName: 'prefetchload' */ './PrefetchLoad'
  )
);

const LazyLoad = lazy(() =>
  import(/* webpackChunkName: 'lazyload' */ './LazyLoad')
);

const condition = false;

const App = () => {
  return (
    <Suspense fallback="Loading">
      <h1>Lazy Load Demo</h1>
      <LazyLoad />
      {condition && <PrefetchLoad />}
    </Suspense>
  );
};

export default App;
