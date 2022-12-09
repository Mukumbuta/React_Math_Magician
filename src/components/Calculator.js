import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [CalcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    setCalcData(calculate(CalcData, e.target.textContent));
  };

  const { total } = CalcData;

  return (
    <div className="calc-frame">
      <h1>Let&apos;s do some math!</h1>
      <div className="main-calc">
        <Display value={total || '0'} />
        <div className="btn-row">
          <Button eventsHandler={clickHandler} label="AC" />
          <Button eventsHandler={clickHandler} label="+/-" />
          <Button eventsHandler={clickHandler} label="%" />
          <Button eventsHandler={clickHandler} label="÷" />
        </div>
        <div className="btn-row">
          <Button eventsHandler={clickHandler} label="7" />
          <Button eventsHandler={clickHandler} label="8" />
          <Button eventsHandler={clickHandler} label="9" />
          <Button eventsHandler={clickHandler} label="x" />
        </div>
        <div className="btn-row">
          <Button eventsHandler={clickHandler} label="4" />
          <Button eventsHandler={clickHandler} label="5" />
          <Button eventsHandler={clickHandler} label="6" />
          <Button eventsHandler={clickHandler} label="+" />
        </div>
        <div className="btn-row">
          <Button eventsHandler={clickHandler} label="1" />
          <Button eventsHandler={clickHandler} label="2" />
          <Button eventsHandler={clickHandler} label="3" />
          <Button eventsHandler={clickHandler} label="-" />
        </div>
        <div className="last-btn-row btn-row">
          <div className="zero-btn">
            <Button eventsHandler={clickHandler} label="0" />
          </div>
          <Button eventsHandler={clickHandler} label="." />
          <Button eventsHandler={clickHandler} label="=" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
