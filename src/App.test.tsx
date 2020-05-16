import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import {App} from './App';

test('renders App', () => {
  const {getByText} = render(<App />);
  expect(getByText('test')).toHaveTextContent('test');
});

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
