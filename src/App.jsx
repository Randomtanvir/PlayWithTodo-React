import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from "./components/TodoItem/TodoItem";
import { TodoProvider } from "./Contex";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (tittle) => {
    setTodos((prev) => [
      { id: Math.random(), tittle, complete: false },
      ...prev,
    ]);
  };

  const editTodo = (id, titlle) => {
    setTodos((prev) =>
      prev.map((todoVlue) =>
        todoVlue.id === id ? { ...todoVlue, titlle } : todoVlue
      )
    );
  };
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((value) =>
        value.id === id ? { ...value, complete: !value.complete } : value
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((value) => value.id !== id));
  };

  // for localStorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
            {todos.map((singleTodo) => (
              <TodoItem todos={singleTodo} key={singleTodo.id} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
