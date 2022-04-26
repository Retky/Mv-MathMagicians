import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calc = () => {
  const btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const [object, setObject] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    setObject(calculate(object, e.target.name));
  };

  return (
    <div className="mainCont">
      <h2>Let&apos;s do some math!</h2>
      <div className="calc">
        <div className="calcScreen">{object.next ?? object.operation ?? object.total ?? 0}</div>
        <div className="calcKeys">
          {btns.map((btn) => {
            let genBtn;
            if (btn === '0') {
              genBtn = (<button name={btn} key={btn} className="calcBtn zero" type="button" onClick={clickHandler}>{btn}</button>);
            } else if (btn.match(/^['÷', 'x', '-', '+', '\-', '=']$/)) {
              genBtn = (<button name={btn} key={btn} className="calcBtn orangeBtn" type="button" onClick={clickHandler}>{btn}</button>);
            } else {
              genBtn = (<button name={btn} key={btn} className="calcBtn" type="button" onClick={clickHandler}>{btn}</button>);
            }
            return genBtn;
          })}
        </div>
      </div>
    </div>
  );
};

export default Calc;
