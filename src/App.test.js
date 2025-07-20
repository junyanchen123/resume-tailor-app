import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders upload resume input', () => {
  render(<App />);
  const label = screen.getByText(/upload resume/i);
  expect(label).toBeInTheDocument();
});
