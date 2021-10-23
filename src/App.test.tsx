import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with header title', () => {
  render(<App />);
  const titleElement = screen.getAllByText(/Vehicles/i)[0];
  expect(titleElement).toBeInTheDocument();
});
