import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

test('renders image correctly', () => {
  render(<Provider store={store}><App /></Provider>);
  const headerElement = screen.getByText('Search for your Favourite Dog!');
  expect(headerElement).toBeInTheDocument();
});
