import React from "react";

export const InputTodo = () => {
  return (
    <div className="top-wrapper">
      <p>本日のTODO</p>
      <button>+</button>
      <input placeholder="TODOを入力" />
    </div>
  );
};
