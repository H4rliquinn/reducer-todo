import React from "react";
import "./Todo.css";
import Moment from "react-moment";

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
        <div>
          <h1>{item.item}</h1>
          {item.dateComplete ? (
            <h2>
              Completed:&nbsp;
              {
                <Moment
                  className="momentDate"
                  date={item.dateComplete}
                  format={"M/D/YY LT"}
                />
              }
            </h2>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  });
};

export default TodoList;
