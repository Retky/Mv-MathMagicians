import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Home component', () => {
  it('renders "Mathematics is not about numbers..."', () => {
    // Arrange
    render(<Quote />);

    // Assert
    const headingElement = screen.getByText('Mathematics is not about numbers', { exact: false });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders component to match the previous snapshot', () => {
    // Assert
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
