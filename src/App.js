import React from "react";
import TodoItem from "./components/TodoItem";
import todoData from "./todoData";
import "./App.css";

function App() {
  const todoItemComponent = todoData.map(item => (
    <TodoItem key={item.id} item={item} />
  ));

  return <div>{todoItemComponent}</div>;
}

export default App;
