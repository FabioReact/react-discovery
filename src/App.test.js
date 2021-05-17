import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Je suis sur la page d'accueil");
  expect(linkElement).toBeInTheDocument();
});
