import React, { useReducer } from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import { todoReducer, itemList } from "./reducers/todoReducer.js";

const App = () => {
  const [todoState, dispatch] = useReducer(todoReducer, itemList);
  console.log("STATE", todoState);

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoList todos={todoState} dispatch={dispatch} />
      <TodoForm todos={todoState} dispatch={dispatch} />
    </div>
  );
};

export default App;
