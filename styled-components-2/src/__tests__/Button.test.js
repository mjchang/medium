import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Button } from '../App';

test('snapshot', () => {
  const { container } = render(<Button />);
  expect(container.firstChild).toMatchSnapshot();
});

test('should have style', () => {
  const { container } = render(<Button />);
  expect(container.firstChild).toHaveStyleRule('background-color', '#6c757d');
  expect(container.firstChild).toHaveStyleRule('background-color', '#5a6268', {
    modifier: ':hover',
  });
});
