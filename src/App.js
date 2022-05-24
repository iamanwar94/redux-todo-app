import React from "react";
import Input from "./components/Input/Input";
import TodoItem from "./components/todoItem/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

import "./App.css";

const App = () => {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.done} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
};
export default App;
