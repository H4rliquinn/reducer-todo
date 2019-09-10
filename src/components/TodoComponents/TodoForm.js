import React from "react";

const Todoform = props => {
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    props.dispatch({ [name]: value });
    // console.log(e.target.value,this.state);
  };

  const addButton = e => {
    // props.todos(e, props.todoState.input);
    // setState({ input: "" });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add item"
        id="newTodo"
        name="newTodo"
        onChange={e =>
          props.dispatch({ type: "UPDATE_INPUT", payload: e.target.value })
        }
        value={props.todos.input}
      />
      <button
        type="button"
        name="addButton"
        onClick={e => props.dispatch({ type: "ADD_TODO" })}
      >
        Add
      </button>
      <button
        type="button"
        onClick={e =>
          props.dispatch({ type: "CLEAR_TODO", payload: e.target.value })
        }
      >
        Clear
      </button>
    </form>
  );
};

export default Todoform;
