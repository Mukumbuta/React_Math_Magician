import React, { useState } from 'react';
import Button from './Button';
import Screen from './Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [CalData, setCalData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    setCalData(calculate(CalData, e.target.textContent));
  };

  const { total } = CalData;

  return (
    <div className="calc-frame">
      <div className="main-calc">
        <Screen value={total || '0'} />
        <div className="btn-row">
          <Button handleClick={handleClick} label="AC" />
          <Button handleClick={handleClick} label="+/-" />
          <Button handleClick={handleClick} label="%" />
          <Button handleClick={handleClick} label="÷" />
        </div>
        <div className="btn-row">
          <Button handleClick={handleClick} label="7" />
          <Button handleClick={handleClick} label="8" />
          <Button handleClick={handleClick} label="9" />
          <Button handleClick={handleClick} label="×" />
        </div>
        <div className="btn-row">
          <Button handleClick={handleClick} label="4" />
          <Button handleClick={handleClick} label="5" />
          <Button handleClick={handleClick} label="6" />
          <Button handleClick={handleClick} label="+" />
        </div>
        <div className="btn-row">
          <Button handleClick={handleClick} label="1" />
          <Button handleClick={handleClick} label="2" />
          <Button handleClick={handleClick} label="3" />
          <Button handleClick={handleClick} label="-" />
        </div>
        <div className="last-btn-row btn-row">
          <div className="zero-btn">
            <Button handleClick={handleClick} label="0" />
          </div>
          <Button handleClick={handleClick} label="." />
          <Button handleClick={handleClick} label="=" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
