import React, { useState } from "react";

// eslint-disable-next-line react/function-component-definition, react/prop-types
const FunctionalInput = ({ name }) => {
  /*
    We declare two state variables and their setters,
    one to store the To-Do's
    and the other to store the value of the input field
  */
  const [todos, setTodos] = useState(["Just some demo tasks", "As an example"]);
  const [inputVal, setInputVal] = useState("");
  const [count, setCount] = useState(todos.length);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal("");
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDelete = (indexToDelete) => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToDelete)
    );
    const newLength = todos.length - 1;
    setCount(newLength);
  };

  const handleEdit = (indexToEdit) => {
    setEditingIndex(indexToEdit);
    setEditingValue(todos[indexToEdit]);
  };

  const handleSave = (indexToSave, valueToSave) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, index) =>
        index === indexToSave ? valueToSave : todo
      )
    );
    setEditingIndex(null);
    setEditingValue("");
  };

  return (
    <section>
      <h3>{name}</h3>
      {/* The input field to enter To-Do's */}
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      {/* The list of all the To-Do's, displayed */}
      <p>You have {count} tasks in your list</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={`${todo}-${index}`} className="button-container">
            {editingIndex === index ? (
              <input
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
              />
            ) : (
              todo
            )}
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              DELETE
            </button>
            <button
              onClick={() => {
                if (editingIndex === index) {
                  handleSave(index, editingValue);
                } else {
                  handleEdit(index);
                }
              }}
            >
              {editingIndex === index ? "SAVE" : "EDIT"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FunctionalInput;
