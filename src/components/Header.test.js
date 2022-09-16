import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
  const header = render(<Header />);
  expect(header).toMatchSnapshot();
  const linkElement = screen.getByText(/Math Magicians/i);
  const firstNavLink = screen.getByText(/Home/i);
  const secondNavLink = screen.getByText(/Calculator/i);
  const thirdNavLink = screen.getByText(/Quote/i);
  expect(linkElement).toBeInTheDocument();
  expect(firstNavLink).toBeInTheDocument();
  expect(secondNavLink).toBeInTheDocument();
  expect(thirdNavLink).toBeInTheDocument();
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
