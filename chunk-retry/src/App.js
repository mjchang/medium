import React, { lazy, Suspense } from 'react';

import importRetry from './importRetry';

import ErrorBoundary from './ErrorBoundary';

const Chunk = lazy(() =>
  importRetry(() => import(/* webpackChunkName: 'chunk' */ './Chunk'))
);

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback="Loading">
        <h1>Chunk Retry Demo</h1>
        <Chunk />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
