import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div onClick={() => toggle(id)} className="flex item-center my-3 gap-2">
      <div className="flex flex-I items-center cursor-pointer">
        <img src={tick} alt="" className="w-7" />
        <p className="tex-s1ate-700 ml-4 text-[17] text-black">{text}</p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt=""
        className="w-4 h-5 cursor-pointer ml-auto"
      />{" "}
    </div>
  );
};

export default TodoItems;
