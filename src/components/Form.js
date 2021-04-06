import React from "react";

function Form({ setInputText, todos, setTodos, inputText, setFilter }) {
  function inputTextHandler(event) {
    setInputText(event.target.value);
  }

  function submitTodoHandler(event) {
    event.preventDefault(); // prevent browser default behaviour
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText("");
  }

  function filterHandler(event) {
    setFilter(event.target.value);
  }

  return (
    <form>
      <div className="row">
        <div className="select d-flex flex-column flex-lg-row justify-content-center align-items-center text-center">
          <select
            onChange={filterHandler}
            name="todos"
            className="filter-todo "
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center text-center">
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            className="todo-input col-6 col-sm-6 col-md-4 col-lg-2 "
            placeholder="Task title"
          />
        </div>
      </div>
      <div className="row">
        <div className="mx-auto justify-content-center align-items-center text-center">
          <button
            onClick={submitTodoHandler}
            className="todo-button"
            type="submit"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
