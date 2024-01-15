import {createContext, useContext} from 'react';

// initialize
export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    addTodo: () => {},
    updateTodo: (todoBody) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// make other components in the app aware of the context via a Provider
export const TodoProvider = TodoContext.Provider;

// consume
export const useTodo = () => {
    return useContext(TodoContext);
}