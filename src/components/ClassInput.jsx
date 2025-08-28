/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      inputVal: "",
      count: 2,
      editingIndex: null,
      editingValue: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
      count: state.todos.length + 1,
    }));
  }

  handleDelete(indexToDelete) {
    this.setState((prevState) => ({
      ...prevState,
      todos: prevState.todos.filter((_, index) => index !== indexToDelete),
      count: prevState.todos.length - 1,
    }));
  }

  handleSave(indexToSave, valueToSave) {
    this.setState((prevState) => ({
      ...prevState,
      todos: prevState.todos.map((todo, index) =>
        index === indexToSave ? valueToSave : todo
      ),
      editingIndex: null,
      editingValue: "",
    }));
  }

  handleEdit(indexToEdit) {
    this.setState({
      editingIndex: indexToEdit,
      editingValue: this.state.todos[indexToEdit],
    });
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <p>You have {this.state.count} tasks in your list</p>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={`${todo}-${index}`} className="button-container">
              {this.state.editingIndex === index ? (
                <input
                  value={this.state.editingValue}
                  onChange={(e) => this.setState({ editingValue: e.target.value })}
                />
              ) : (
                todo
              )}
              <button onClick={() => this.handleDelete(index)}>DELETE</button>
              <button
                onClick={() => {
                  if (this.state.editingIndex === index) {
                    this.handleSave(index, this.state.editingValue);
                  } else {
                    this.handleEdit(index);
                  }
                }}
              >
                {this.state.editingIndex === index ? "SAVE" : "EDIT"}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
