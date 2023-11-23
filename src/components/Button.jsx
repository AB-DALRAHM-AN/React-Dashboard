import React from "react";
import { useStateContext } from "../context/ContextProvider";

const Button = ({ color, bgColor, size, text, rounded, bgHoverColor, width, icon }) => {

  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color: color, borderRadius: rounded }}
      className={`text-${size} w-${width} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {text} {icon}
    </button>
  );
};

export default Button;
