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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todo.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todoItems = this.state.todo.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div>{todoItems}</div>;
  }
}

export default App;
