import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    this.state = {
      object: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  clickHandler = (e) => {
    const { object } = this.state;
    this.setState({ object: calculate(object, e.target.name) });
  }

  render() {
    const { object } = this.state;
    return (
      <div className="calc">
        <div className="calcScreen">{object.next ?? object.operation ?? object.total ?? 0}</div>
        <div className="calcKeys">
          {this.btns.map((btn) => {
            let genBtn;
            if (btn === '0') {
              genBtn = (<button name={btn} key={btn} className="calcBtn zero" type="button" onClick={this.clickHandler}>{btn}</button>);
            } else if (btn.match(/^['÷', 'x', '-', '+', '\-', '=']$/)) {
              genBtn = (<button name={btn} key={btn} className="calcBtn orangeBtn" type="button" onClick={this.clickHandler}>{btn}</button>);
            } else {
              genBtn = (<button name={btn} key={btn} className="calcBtn" type="button" onClick={this.clickHandler}>{btn}</button>);
            }
            return genBtn;
          })}
        </div>
      </div>
    );
  }
}

export default Calc;
