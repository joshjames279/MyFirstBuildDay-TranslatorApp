import { render, screen } from '@testing-library/react';
import French from './French.js';
import userEvent from '@testing-library/user-event'

test('renders translation into French', () => {
  render(<French />)
  userEvent.type(screen.getByRole('textbox'),'yes')
  userEvent.click(screen.getByRole('button'))
  
  expect(screen.getByText("oui")).toBeInTheDocument();
});