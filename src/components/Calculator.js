import React, { Component } from 'react';
import Button from './Button';
import Screen from './Display';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(e) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState(calculate(this.state, e.target.textContent));
  }

  render() {
    const { total } = this.state;
    return (
      <div className="calc-frame">
        <div className="main-calc">
          <Screen value={total || '0'} />
          <div className="btn-row">
            <Button handleClick={this.handleClick} label="AC" />
            <Button handleClick={this.handleClick} label="+/-" />
            <Button handleClick={this.handleClick} label="%" />
            <Button handleClick={this.handleClick} label="÷" />
          </div>
          <div className="btn-row">
            <Button handleClick={this.handleClick} label="7" />
            <Button handleClick={this.handleClick} label="8" />
            <Button handleClick={this.handleClick} label="9" />
            <Button handleClick={this.handleClick} label="×" />
          </div>
          <div className="btn-row">
            <Button handleClick={this.handleClick} label="4" />
            <Button handleClick={this.handleClick} label="5" />
            <Button handleClick={this.handleClick} label="6" />
            <Button handleClick={this.handleClick} label="+" />
          </div>
          <div className="btn-row">
            <Button handleClick={this.handleClick} label="1" />
            <Button handleClick={this.handleClick} label="2" />
            <Button handleClick={this.handleClick} label="3" />
            <Button handleClick={this.handleClick} label="-" />
          </div>
          <div className="last-btn-row btn-row">
            <div className="zero-btn">
              <Button handleClick={this.handleClick} label="0" />
            </div>
            <Button handleClick={this.handleClick} label="." />
            <Button handleClick={this.handleClick} label="=" />
          </div>
        </div>
      </div>
    );
  }
}
