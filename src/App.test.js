import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Обновленный текст для проверки деплоя/i);
  expect(linkElement).toBeInTheDocument();
});
