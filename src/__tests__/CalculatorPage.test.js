import { render, screen } from '@testing-library/react';
import CalculatorPage from '../pages/CalculatorPage';

describe('Calculator View', () => {
  test('Renders CalculatorPage component', () => {
    const Snapshot = render(<CalculatorPage />);
    expect(Snapshot).toMatchSnapshot();
  });

  test('Check for title in the component', () => {
    render(<CalculatorPage />);
    const calcTitle = screen.getByText('Lets do Math!');
    expect(calcTitle).toBeInTheDocument();
  });
});
