import React, { Component } from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList/TodoList';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export class App extends Component {
  state = {
    // todos: initialTodos,
  };

  deleteTodo = todoId => {};

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <h1>State of a Component</h1>
        <Counter />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <TodoList onSubmit={this.formSubmitHandler} />
      </>
    );
  }
}
