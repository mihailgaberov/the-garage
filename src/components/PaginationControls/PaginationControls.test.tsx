import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import PaginationControls from './index';

test('renders PaginationControls component with controls', () => {
  const handlePaginate = jest.fn();
  render(<PaginationControls totalCount={100} handlePaginate={handlePaginate} />);
  const txtElement = screen.getByText(/100/i);
  expect(txtElement).toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(handlePaginate).toBeCalledTimes(1);
});
