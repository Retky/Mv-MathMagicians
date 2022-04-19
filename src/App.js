import React from 'react';
import Calc from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { display: 'calc' };
  }

  render() {
    // Prevent linter asking to export function
    console.log(this.state); // Remove when more states
    return (
      <div>
        <Calc />
      </div>
    );
  }
}

export default App;
