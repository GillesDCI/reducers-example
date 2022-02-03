import Todo from './Todo';
import { useTodoContext} from './../context/Todo/Todo';
import { deleteTodo, finishTodo } from '../context/Todo/TodoReducer';

// import { deleteTodo, finishTodo } from './../contexts/Todo/TodoReducer'

export default function TodoList(){
  const {state, dispatch} = useTodoContext();

   const deleteTodoItem = (item) => {
     console.log("the item that needs to be deleted", item);
     dispatch(deleteTodo(item.id))
   }

   const finishTodoItem = (item) => {
     console.log("the task that is completed is ", item)
     dispatch(finishTodo(item.id));
   }


    return (
        <>
        <h2>Todo List</h2>
        <div className='todo-container'>
        {state.todos.map((item, index) => (
          <Todo item={item} key={index} onDeleteClicked={deleteTodoItem} onFinishClicked={finishTodoItem}  />
        ))}
        </div>
  
      </>
    )

}