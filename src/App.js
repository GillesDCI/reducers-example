import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoProvider from './context/Todo/Todo';

function App() {

  return (
    <TodoProvider>
     <div>
      <h1>New Todo</h1>

      <TodoForm />
      <TodoList />
      </div>
    </TodoProvider>
    
  );
}

export default App;
