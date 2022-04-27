import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Navigation';

describe('Navbar component', () => {
  it('renders "Math Magicians"', () => {
    // Arrange
    render(
      <BrowserRouter><NavBar /></BrowserRouter>,
    );

    // Assert
    const headingElement = screen.getByText('Math Magicians');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders component to match the previous snapshot', () => {
    // Assert
    const tree = renderer.create(<BrowserRouter><NavBar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
