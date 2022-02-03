import { useState } from 'react';
import { useTodoContext } from '../context/Todo/Todo';
import { addTodo } from '../context/Todo/TodoReducer';


export default function TodoForm(){

    const { dispatch } = useTodoContext();
    const [currentTodo, setCurrentTodo] = useState("");

    const addTodoItem = () => {
        dispatch(addTodo({text:currentTodo, createdOn:Date.now(), done:false}))
    }

    return (
        <>
        <input type="text" onChange={(e) => setCurrentTodo(e.target.value)}   /> 
         <button onClick={addTodoItem} >Add todo </button>
      </>
    )
} 