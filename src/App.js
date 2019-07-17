import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import todoData from "./todoData";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: todoData
    };
  }
  render() {
    const todoItems = this.state.todo.map(item => (
      <TodoItem key={item.id} item={item} />
    ));

    return <div>{todoItems}</div>;
  }
}

export default App;
