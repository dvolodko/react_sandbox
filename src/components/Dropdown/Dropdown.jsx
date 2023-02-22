import React, { Component } from 'react';
import { DropdownContainer, DropdownMenu } from './Dropdown.styled';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <DropdownContainer>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        {this.state.visible && <DropdownMenu>Dropdown Menu</DropdownMenu>}
      </DropdownContainer>
    );
  }
}

export default Dropdown;
