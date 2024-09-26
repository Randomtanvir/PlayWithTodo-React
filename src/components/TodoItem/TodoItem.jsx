import { useTodo } from "@/Contex";
import React, { useState } from "react";

const TodoItem = ({ todos }) => {
  const [iseditable, setIseditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todos.tittle);
  const { editTodo, toggleTodo, deleteTodo } = useTodo();

  const updateTodo = () => {
    editTodo(todos.id, todoMsg);
    setIseditable(false);
  };
  const removeTodo = () => {
    deleteTodo(todos.id);
  };
  const toggleCompleate = () => {
    toggleTodo(todos.id);
  };

  return (
    <>
      <div
        className={`rounded-md text-white flex gap-4 px-4 h-12 items-center ${
          todos.complete ? "bg-base" : "bg-main"
        }`}
      >
        <input
          type="checkbox"
          checked={todos.complete}
          onChange={toggleCompleate}
          className="cursor-pointer"
        />
        <input
          value={todoMsg}
          onChange={(e) => {
            if (todos.complete) return;
            setTodoMsg(e.target.value);
          }}
          type="text"
          readOnly={!iseditable}
          className={`bg-transparent w-full border-black/30 outline-none rounded-md h-10 px-2 ${
            iseditable ? "border" : ""
          } ${todos.complete && "line-through"}`}
        />
        <button
          onClick={() => {
            if (todos.complete) return;
            if (iseditable) {
              updateTodo();
            } else setIseditable((prev) => !prev);
          }}
          className="text-green-500 hover:text-green-600 font-medium"
        >
          {!iseditable ? "Edit" : "Save"}
        </button>
        <button
          onClick={removeTodo}
          className="text-pink-700 font-semibold hover:text-red-600"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoItem;
