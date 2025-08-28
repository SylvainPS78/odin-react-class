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
          <>
            <li key={todo}>{todo}</li>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              DELETE
            </button>
          </>
        ))}
      </ul>
    </section>
  );
};

export default FunctionalInput;
