import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    name: '',
    nickname: '',
    experience: 'junior',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', nickname: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name{' '}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Nickname{' '}
            <input
              type="text"
              name="nickname"
              value={this.state.nickname}
              onChange={this.handleChange}
            />
          </label>

          <p>Your experience:</p>

          <label>
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
            />{' '}
            Junior
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
            />{' '}
            Middle
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
            />{' '}
            Senior
          </label>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default TodoList;
