import React, { Component } from 'react';
import Controls from './Controls';
import { CounterContainer, CounterValue } from './Counter.styled';

class Counter extends Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <CounterContainer>
        <CounterValue>{this.state.value}</CounterValue>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </CounterContainer>
    );
  }
}

export default Counter;
