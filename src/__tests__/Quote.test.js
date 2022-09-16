import { render, screen } from '@testing-library/react';
import Quote from '../pages/Quote';

describe('Quote View', () => {
  test('Renders Footer component', () => {
    const Snapshot = render(<Quote />);
    expect(Snapshot).toMatchSnapshot();
  });

  test('Check for quote in the component', () => {
    render(<Quote />);
    const quote = screen.getByText(
      'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.',
    );
    expect(quote).toBeInTheDocument();
  });
});
