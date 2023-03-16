import { render, screen } from '@testing-library/react';
import App from './App';
<<<<<<< HEAD
import * as React from 'react';
=======
>>>>>>> 00a9b98 (Initial commit)

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
