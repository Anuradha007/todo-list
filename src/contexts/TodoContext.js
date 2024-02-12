import { useContext , createContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo:  'Buy groceries',
            completed: false,
        },
    ],
    adTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider