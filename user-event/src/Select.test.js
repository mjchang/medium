import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ReactSelect from 'react-select';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
];

test('should not open select menu with fireEvent click', () => {
  const { container, queryByText } = render(
    <ReactSelect classNamePrefix="select" options={options} />
  );
  const control = container.querySelector('.select__dropdown-indicator');
  fireEvent.click(control);
  expect(queryByText('React')).toBeNull();
  expect(queryByText('Vue')).toBeNull();
  expect(queryByText('Angular')).toBeNull();
});

test('should open select menu with fireEvent mouseDown', () => {
  const { container, getByText } = render(
    <ReactSelect classNamePrefix="select" options={options} />
  );
  const control = container.querySelector('.select__dropdown-indicator');
  fireEvent.mouseDown(control);
  expect(getByText('React')).toBeTruthy();
  expect(getByText('Vue')).toBeTruthy();
  expect(getByText('Angular')).toBeTruthy();
});

test('should open select menu with userEvent click', () => {
  const { container, getByText } = render(
    <ReactSelect classNamePrefix="select" options={options} />
  );
  const control = container.querySelector('.select__dropdown-indicator');
  userEvent.click(control);
  expect(getByText('React')).toBeTruthy();
  expect(getByText('Vue')).toBeTruthy();
  expect(getByText('Angular')).toBeTruthy();
});
