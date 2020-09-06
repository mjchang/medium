import React, { useState } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {
        count > 0 && (
          <button onClick={() => setCount(0)}>
            Decrement
          </button>
        )
      }
    </div>
  );
}

test('render', () => {
  render(<Counter />);
});

test('queries existence', () => {
  const { getByText } = render(<Counter />);
  const increment = getByText('Increment');
});

test('queries non-existence', () => {
  const { queryByText } = render(<Counter />);
  const decrement = queryByText('Decrement');
});

test('fireEvent', () => {
  const { getByText } = render(<Counter />);
  const increment = getByText('Increment');
  fireEvent.click(increment);
});

test('validation existence', () => {
  const { getByText } = render(<Counter />);
  const increment = getByText('Increment');
  fireEvent.click(increment);
  expect(getByText('Count: 1')).toBeTruthy();
  const decrement = getByText('Decrement');
  fireEvent.click(decrement);
  expect(getByText('Count: 0')).toBeTruthy();
});

test('validation non-existence', () => {
  const { getByText, queryByText } = render(<Counter />);
  expect(queryByText('Decrement')).toBeNull()
  const increment = getByText('Increment');
  fireEvent.click(increment);
  expect(queryByText('Decrement')).toBeTruthy()
});

test('debug default', () => {
  render(<Counter />);
  screen.debug();
  // output:
  //   <body>
  //     <div>
  //       <div>
  //         <p>
  //           Count:
  //           0
  //         </p>
  //         <button>
  //           Increment
  //         </button>
  //       </div>
  //     </div>
  //   </body>
});

test('debug element', () => {
  const { getByText } = render(<Counter />);
  const increment = getByText('Increment');
  screen.debug(increment);
  // output:
  //   <button>
  //     Increment
  //   </button>
});
