import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import Calc from './Calculator';

describe('Calculator component', () => {
  it('renders "Let\'s do some math"', () => {
    // Arrange
    render(<Calc />);

    // Assert
    const headingElement = screen.getByText("Let's do some math", {
      exact: false,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders component to match the previous snapshot', () => {
    // Assert
    const tree = renderer.create(<Calc />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render component when button click', () => {
    // Arrange
    render(<Calc />);

    // Act
    const buttonElement = screen.getAllByRole('button');
    buttonElement.forEach((e) => userEvent.click(e));
  });
});
