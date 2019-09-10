import React, { useReducer } from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import { todoReducer } from "./reducers/todoReducer.js";

const itemList = {
  input: "",
  items: [
    {
      task: "Organize Garage",
      id: 1528817077286,
      completed: false
    },
    {
      task: "Bake Cookies",
      id: 1528817084358,
      completed: false
    }
  ]
};

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
