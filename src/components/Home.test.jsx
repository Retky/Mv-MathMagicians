import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home component', () => {
  it('renders "Welcome to our page!"', () => {
    // Arrange
    render(<Home />);

    // Assert
    const headingElement = screen.getByText('Welcome to our page!');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders first paragraph element', () => {
    // Arrange
    render(<Home />);

    // Assert
    const paragraphElement = screen.getByText('Lorem ipsum dolor sit amet', { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  });

  it('renders second paragraph element', () => {
    // Arrange
    render(<Home />);

    // Assert
    const paragraphElement = screen.getByText('Duis aute irure dolor in reprehenderit', { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  });

  it('renders component to match the previous snapshot', () => {
    // Assert
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
