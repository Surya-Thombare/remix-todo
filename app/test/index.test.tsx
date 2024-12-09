// index.test.jsx

import React from 'react';
import Index from '../routes/_index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';



// test('renders with correct title and description', async () => {
//   const rendered = await render(<Index />);

//   expect(rendered.getByText('Remix Todo App')).toBeInTheDocument();
//   expect(rendered.getByText(/A simple todo application built with Remix/i)).toBeInTheDocument();
// });


test('renders with correct title and description', async () => {
  render(<Index />);

  expect(screen.getByText('Todo App')).toBeInTheDocument();
  expect(screen.getByText(/A simple todo application built with Remix/i)).toBeInTheDocument();
});