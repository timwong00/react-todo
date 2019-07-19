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
      // returns new version of state
      const updatedTodos = prevState.todo.map(todo => {
        // changes the completed boolean based on id
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        // returns the todo array
        return todo;
      });
      return {
        // todo is set to the updated todo with "completed" change
        todo: updatedTodos
      };
    });
  }

  render() {
    const todoItems = this.state.todo.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <section className="container">
        <h1 className="title">To do list</h1>
        <div className="todo-container">{todoItems}</div>
      </section>
    );
  }
}

export default App;
