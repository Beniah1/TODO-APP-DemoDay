import React, { useState, useRef } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./Todoitems.jsx";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return alert("Please enter a task");
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-lg">
      {/* --------------------------- TITLE --------------------------- */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-10 h-10" src={todo_icon} alt="" />
        <h1 className="text-black text-3xl font-semibold">To-Do List</h1>
      </div>
      {/* --------------------------- Input box --------------------------- */}
      <div
        className="flex items-center my-7 bg-gray-200
rounded-full"
      >
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none
flex-1 h-14 pl-6 pr-2 placeholder: text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full
bg-orange-600 w-32 h-14 text-white text-lg font-medium
cursor-pointer"
        >
          ADD +
        </button>
      </div>
      {/* --------------------------- Todo list --------------------------- */}
      <div>
        {todoList.map((item, index) => {
          return <TodoItems key={item.id} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default Todo;