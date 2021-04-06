import React from "react";

function Todo({ text, todo, todos, setTodos }) {
  function deleteHandler() {
    setTodos(todos.filter((element) => element.id !== todo.id));
  }

  // for checking if todo task is completed or not
  function completeHandler() {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
  }

  return (
    <div className="todo justify-content-center align-items-center text-center">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
export default Todo;
