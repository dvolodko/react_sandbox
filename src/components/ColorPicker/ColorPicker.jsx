import React, { Component } from 'react';
import {
  ColorPickerContainer,
  Title,
  ColorPickerOption,
} from './ColorPicker.styled';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  render() {
    return (
      <ColorPickerContainer>
        <Title>Color Picker</Title>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <ColorPickerOption
              key={label}
              style={{ backgroundColor: color }}
            ></ColorPickerOption>
          ))}
        </div>
      </ColorPickerContainer>
    );
  }
}

export default ColorPicker;
