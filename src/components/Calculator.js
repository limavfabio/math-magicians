import React, { useState } from 'react';
import '../styles/Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <section className="calculator-body">
      {/* result Row */}
      <div className="result">{state.next || state.total}</div>

      {/* First Row */}
      <button onClick={handleClick} type="button">
        AC
      </button>
      <button onClick={handleClick} type="button">
        +/-
      </button>
      <button onClick={handleClick} type="button">
        %
      </button>
      <button onClick={handleClick} className="operator" type="button">
        /
      </button>

      {/* Second Row */}
      <button onClick={handleClick} type="button">
        7
      </button>
      <button onClick={handleClick} type="button">
        8
      </button>
      <button onClick={handleClick} type="button">
        9
      </button>
      <button onClick={handleClick} className="operator" type="button">
        *
      </button>

      {/* Third Row */}
      <button onClick={handleClick} type="button">
        4
      </button>
      <button onClick={handleClick} type="button">
        5
      </button>
      <button onClick={handleClick} type="button">
        6
      </button>
      <button onClick={handleClick} className="operator" type="button">
        -
      </button>

      {/* Fourth Row */}
      <button onClick={handleClick} type="button">
        1
      </button>
      <button onClick={handleClick} type="button">
        2
      </button>
      <button onClick={handleClick} type="button">
        3
      </button>
      <button onClick={handleClick} className="operator" type="button">
        +
      </button>

      {/* Fifth Row */}
      <button onClick={handleClick} className="btn-0" type="button">
        0
      </button>
      <button onClick={handleClick} type="button">
        .
      </button>
      <button onClick={handleClick} className="operator" type="button">
        =
      </button>
    </section>
  );
}

export default Calculator;
