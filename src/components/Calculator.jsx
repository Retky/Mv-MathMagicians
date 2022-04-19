import React from 'react';
import './calculator.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  }

  render() {
    return (
      <section className="calc">
        <div className="calcScreen">Screen</div>
        <div className="calcKeys">
          {this.btns.map((btn) => {
            if (btn === '0') {
              return (<button key={btn} className="calcBtn zero" type="button">{btn}</button>);
            }
            return (<button key={btn} className="calcBtn" type="button">{btn}</button>);
          })}
        </div>
      </section>
    );
  }
}

export default Calc;
