import { render, screen } from '@testing-library/react';
import Heading from './Heading.js';

test('renders Heading', () => {
  render(<Heading text="Woohoo!"/>);
  expect(screen.getByText("Woohoo!")).toBeInTheDocument();
});