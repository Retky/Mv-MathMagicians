import React from 'react';
import './calculator.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  }

  render() {
    return (
      <div className="calc">
        <div className="calcScreen">0</div>
        <div className="calcKeys">
          {this.btns.map((btn) => {
            let genBtn;
            if (btn === '0') {
              genBtn = (<button key={btn} className="calcBtn zero" type="button">{btn}</button>);
            } else if (btn.match(/^['÷', 'x', '-', '+', '\-', '=']$/)) {
              genBtn = (<button key={btn} className="calcBtn orangeBtn" type="button">{btn}</button>);
            } else {
              genBtn = (<button key={btn} className="calcBtn" type="button">{btn}</button>);
            }
            return genBtn;
          })}
        </div>
      </div>
    );
  }
}

export default Calc;
