import React, { Component } from 'react';
import Button from './Button';
import Screen from './Display';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <div className="calc-frame">
        <div className="main-calc">
          <Screen />
          <div className="btn-row">
            <Button label="AC" />
            <Button label="+/-" />
            <Button label="%" />
            <Button label="÷" />
          </div>
          <div className="btn-row">
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button label="×" />
          </div>
          <div className="btn-row">
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="+" />
          </div>
          <div className="btn-row">
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button label="-" />
          </div>
          <div className="last-btn-row btn-row">
            <div className="zero-btn">
              <Button label="0" />
            </div>
            <Button label="." />
            <Button label="=" />
          </div>
        </div>
      </div>
    );
  }
}
