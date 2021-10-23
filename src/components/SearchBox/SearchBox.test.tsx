import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import SearchBox from './index';

test('renders SearchBox component that reacts on typing', () => {
  const handleTyping = jest.fn()
  render(<SearchBox handleSearch={handleTyping} />);
  userEvent.type(screen.getByRole('textbox'), 'M - X 897')
  expect(handleTyping).toHaveBeenCalledTimes(9)
});
