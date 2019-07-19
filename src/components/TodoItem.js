import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through",
    color: "#cdcdcd"
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={event => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
