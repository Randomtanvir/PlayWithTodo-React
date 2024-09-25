import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from "./components/TodoItem/TodoItem";
import { TodoProvider } from "./Contex";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (tittle) => {
    setTodos((prev) => [...prev, { id: Math.random(), tittle }]);
  };
  console.log(todos);

  const editTodo = (id, titlle) => {};
  const toggleTodo = (id) => {};
  const deleteTodo = (id) => {};

  return (
    <TodoProvider value={{ todos, addTodo, editTodo, toggleTodo, deleteTodo }}>
      <div className="h-screen bg-mainBgColor py-8">
        <div className="w-full mx-auto max-w-2xl shadow-md  px-4 py-3 ">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-white">
            Manage Your Todos
          </h1>
          <div className="mb-6">
            <TodoForm />
          </div>
          <div className="flex flex-wrap flex-col gap-y-3">
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
