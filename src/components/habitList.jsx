import React from "react";

export const HabitList = (props) => {
  const { habitText, todos, onClickAdd, onChange } = props;
  return (
    <section className="habit-area">
      <p className="title">習慣リスト</p>
      <div>
        <button onClick={onClickAdd}>+</button>
        <input placeholder="習慣を入力" value={habitText} onChange={onChange} />

        {todos.map((todos, num, onClickCount, index) => {
          return (
            <>
              <ul className="list-row">
                <li>{todos}</li>
                <p>{num}</p>
                <button onClick={() => onClickCount}>カウント</button>
              </ul>
            </>
          );
        })}
      </div>
    </section>
  );
};
