import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header test', () => {
  test('Renders Header component', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const headerTitle = screen.getByText('Math Magicians');
    const headerLink = screen.getByText('Calculator');
    const headerLink2 = screen.getByText('Quote');
    expect(headerTitle).toBeInTheDocument();
    expect(headerLink).toBeInTheDocument();
    expect(headerLink2).toBeInTheDocument();
  });
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
