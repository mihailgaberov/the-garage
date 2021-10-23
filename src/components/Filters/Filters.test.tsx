import { render, screen } from "@testing-library/react";
import React from "react";
import Filters from "./index";

test('renders Filters component with given title and options', () => {
  render(<Filters title='TYPE' data={['Filter 1', 'Filter 2', 'Filter 3']} />);
  const txtElement = screen.getByText(/TYPE/i);
  expect(txtElement).toBeInTheDocument();
  const radioElement = screen.getByText(/Filter 1/i);
  expect(radioElement).toBeInTheDocument();
});