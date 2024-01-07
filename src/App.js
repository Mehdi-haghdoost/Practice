import React from 'react';

import './App.css';
import Todolist from './Components/Todolist'

function App() {
  return (
    <>
      <header>
        <h1>Sabzlearn To Do List</h1>
      </header>
      <form action="">
        <input type="text" className="todo-input" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-circle fa-lg"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          {/* Todo */}
          <Todolist />
          {/* Todo */}
        </ul>
      </div>
    </>
  );
}

export default App;
