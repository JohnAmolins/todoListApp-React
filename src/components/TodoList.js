import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (

    <div className="row">
      <div className="justify-content-center align-items-center text-center">
        <div className="todo-container">
          <ul className="todo-list list-group mx-auto col-6 col-sm-6 col-md-4 col-lg-4">
            {filteredTodos.map((todo) => (
              <Todo
                setTodos={setTodos}
                todos={todos}
                key={todo.id}
                text={todo.text}
                id={todo.id}
                todo={todo}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default TodoList;
