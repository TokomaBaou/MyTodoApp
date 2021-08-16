import React from "react";

const style = {
  // backgroundColor: "#c1ffff",
  // borderRadius: "8px",
  // width:"600px",
  // textAlign: "center",
  // alignItems: "center",
};

export const InputTodo = (props) => {
  const { todoText, onClick, onChange } = props;
  return (
    <div className="top-wrapper">
      <p>本日のTODO</p>
      <div style={style}>
        <button onClick={onClick}>+</button>
        <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      </div>
    </div>
  );
};
