import React from "react";
import "./Todo.css";

const TodoList = props => {
  return props.todos.items.map(item => {
    return (
      <div className="todoItem" key={item.id}>
        <input
          type="checkbox"
          id={item.id}
          onChange={() => props.dispatch({ type: "CHECK_TODO", payload: item })}
          checked={props.completed}
        />
        <h1>{item.item}</h1>
      </div>
    );
  });
};

export default TodoList;
