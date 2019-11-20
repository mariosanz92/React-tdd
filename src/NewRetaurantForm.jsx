import React, { Component } from 'react';

export default class NewRestaurantForm extends Component {
  state= { inputText: '' };

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          data-set= "newRestaurantName"
          value = {this.state.inputText}
          onChange = {this.handleTextChange}
        />
        <button
          data-set="saveNewRestaurantButton"
          onClick={this.handleSave}
        >
          Save
        </button>
      </div>
    );
  }
}
