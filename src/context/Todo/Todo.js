import { createContext, useReducer, useContext } from "react";
import {todoReducer, initialState} from './TodoReducer';

export const TodoContext = createContext({});

TodoContext.displayName = 'TodoContext';

export const useTodoContext = () => useContext(TodoContext);

export default function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <TodoContext.Provider value={{state, dispatch}}>
          {children}
        </TodoContext.Provider>
    );
}