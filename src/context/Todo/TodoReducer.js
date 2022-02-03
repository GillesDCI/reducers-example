//abstracting strings in constants
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FINISH_TODO = 'FINISH_TODO';


export const initialState = {
    todos:[]
};

export const addTodo = (todoItem) => ({
    type:ADD_TODO,
    todoItem //payload
});

export const deleteTodo = (payload) => ({
    type:DELETE_TODO,
    payload
})

export const finishTodo = (payload) => ({
    type:FINISH_TODO,
    payload
})


//dispatch(ADD_TODO, paylaod)

export const todoReducer = (state = initialState, action) => {
    //add todo action
    if(action.type == ADD_TODO){
        console.log("the todo was added");
        console.log("the new list", state.todos)
        const newId = new Date().valueOf();
        action.todoItem.id = newId;

        return {
            ...state,
            todos:[...state.todos, action.todoItem]
        }
    }
    if(action.type == DELETE_TODO){
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
          };
    }
    if(action.type == FINISH_TODO){
        const indexTodo = state.todos.findIndex((item) => item.id == action.payload);
        const newTodos = [...state.todos];
        newTodos[indexTodo].done = true
    
        return {
          ...state,
          todos: newTodos
        };
    }
}

