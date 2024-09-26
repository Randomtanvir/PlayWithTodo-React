import { useTodo } from "@/Contex";
import React, { useState } from "react";

const TodoForm = () => {
  const [state, setState] = useState("");
  const { addTodo } = useTodo();

  const stateHandel = (e) => {
    e.preventDefault();
    if (state.length === 0) {
      return;
    }
    addTodo(state);
    setState("");
  };

  return (
    <>
      <form className="flex" onSubmit={stateHandel}>
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          type="text"
          placeholder="write todo"
          className="bg-base h-10 text-white w-full px-4 py-3 border outline-none border-main rounded-l-lg"
        />
        <button
          type="submit"
          className="bg-main rounded-r-lg h-10 px-4 text-sm text-white "
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
