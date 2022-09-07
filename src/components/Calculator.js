/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../styles/Calculator.css';
import calculate from '../logic/Calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  };

  render() {
    const { total, next } = this.state;
    return (
      <section className="calculator-body">
        {/* result Row */}
        <div className="result">{next || total}</div>

        {/* First Row */}
        <button onClick={this.handleClick} type="button">
          AC
        </button>
        <button onClick={this.handleClick} type="button">
          +/-
        </button>
        <button onClick={this.handleClick} type="button">
          %
        </button>
        <button onClick={this.handleClick} className="operator" type="button">
          /
        </button>

        {/* Second Row */}
        <button onClick={this.handleClick} type="button">
          7
        </button>
        <button onClick={this.handleClick} type="button">
          8
        </button>
        <button onClick={this.handleClick} type="button">
          9
        </button>
        <button onClick={this.handleClick} className="operator" type="button">
          *
        </button>

        {/* Third Row */}
        <button onClick={this.handleClick} type="button">
          4
        </button>
        <button onClick={this.handleClick} type="button">
          5
        </button>
        <button onClick={this.handleClick} type="button">
          6
        </button>
        <button onClick={this.handleClick} className="operator" type="button">
          -
        </button>

        {/* Fourth Row */}
        <button onClick={this.handleClick} type="button">
          1
        </button>
        <button onClick={this.handleClick} type="button">
          2
        </button>
        <button onClick={this.handleClick} type="button">
          3
        </button>
        <button onClick={this.handleClick} className="operator" type="button">
          +
        </button>

        {/* Fifth Row */}
        <button onClick={this.handleClick} className="btn-0" type="button">
          0
        </button>
        <button onClick={this.handleClick} type="button">
          .
        </button>
        <button onClick={this.handleClick} className="operator" type="button">
          =
        </button>
      </section>
    );
  }
}

export default Calculator;
