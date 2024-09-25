import React from "react";

const TodoItem = () => {
  return (
    <>
      <div
        className={`bg-main rounded-md text-white flex gap-4 px-4 h-12 items-center ${
          false && "bg-base"
        }`}
      >
        <input type="checkbox" className="cursor-pointer" />
        <input
          type="text"
          readOnly={true}
          className={`bg-transparent w-full border-black/30 outline-none rounded-md h-10 px-2 ${
            false ? "border" : ""
          } ${false && "line-through"}`}
        />
        <button className="text-green-500 hover:text-green-600 font-medium">
          {false ? "Edit" : "Save"}
        </button>
        <button className="text-pink-700 font-semibold hover:text-red-600">
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoItem;
