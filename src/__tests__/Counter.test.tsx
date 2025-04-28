import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../components/Counter';

describe('Counter Component', () => {
  test('renders with default initial value', () => {
    render(<Counter />);
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });

  test('renders with custom initial value', () => {
    render(<Counter initialValue={10} />);
    expect(screen.getByText('Counter: 10')).toBeInTheDocument();
  });

  test('increments counter when + button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });

  test('decrements counter when - button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByText('Counter: -1')).toBeInTheDocument();
  });
});
