import React from 'react';
import { CounterControls } from './Counter.styled';

const Controls = ({ onIncrement, onDecrement }) => (
  <div>
    <CounterControls type="button" onClick={onIncrement}>
      Increment by 1
    </CounterControls>
    <CounterControls type="button" onClick={onDecrement}>
      Decrement by 1
    </CounterControls>
  </div>
);

export default Controls;
