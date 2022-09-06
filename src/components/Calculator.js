/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../styles/Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <section className="calculator-body">
        {/* result Row */}
        <div className="result">9876543210</div>

        {/* First Row */}
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button className="operator" type="button">
          /
        </button>

        {/* Second Row */}
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button className="operator" type="button">
          *
        </button>

        {/* Third Row */}
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button className="operator" type="button">
          -
        </button>

        {/* Fourth Row */}
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button className="operator" type="button">
          +
        </button>

        {/* Fifth Row */}
        <button className="btn-0" type="button">
          0
        </button>
        <button type="button">.</button>
        <button className="operator" type="button">
          =
        </button>
      </section>
    );
  }
}

export default Calculator;
