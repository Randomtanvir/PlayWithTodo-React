import { createContext, useContext } from "react";

export const TodoContex = createContext({
  todos: [
    {
      id: 1,
      tittle: "Task one",
      complete: false,
    },
  ],

  addTodo: (tittle) => {},
  editTodo: (id, tittle) => {},
  toggleTodo: (id) => {},
  deleteTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContex);
};

export const TodoProvider = TodoContex.Provider;
