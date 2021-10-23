import React from 'react';
import { render, screen } from '@testing-library/react';

import FiltersContainer from './index';

test('renders FiltersContainer component with filters for levels and type', () => {
  render(<FiltersContainer />);
  const txtLevelsElement = screen.getByText(/LEVELS/i);
  expect(txtLevelsElement).toBeInTheDocument();
  const txtTypeElement = screen.getByText(/TYPE/i);
  expect(txtTypeElement).toBeInTheDocument();
});
