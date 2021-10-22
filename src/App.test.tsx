import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with title text', () => {
  render(<App />);
  const titleElement = screen.getByText(/Vehicles/i);
  expect(titleElement).toBeInTheDocument();
});
