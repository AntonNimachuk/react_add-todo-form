/* eslint-disable */
// @ts-nocheck

import { useState } from 'react';
import './App.scss';
import {TodoList} from './components/TodoList';
import {TodoForm} from './components/TodoForm';
import todosFromServer from './api/todos';
import usersFromServer from './api/users';
import {Todo} from './types/Todo';

export const App = () => {
  const users = usersFromServer;
  const [todos, setTodos] = useState(todosFromServer);

  const handleTodos = (newTodo : Todo) => {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <h1>Add todo form</h1>
        <TodoForm onAdd={handleTodos} users={users} todos={todos}/>
        <TodoList todos={todos}/>
    </div>
  );
};
