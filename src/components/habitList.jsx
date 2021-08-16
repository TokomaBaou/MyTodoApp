import React from "react";

export const HabitList = (props) => {
  const { habitText, habitLists, onClick, onChange } = props;
  return (
    <section className="habit-area">
      <p className="title">習慣リスト</p>
      <div>
        <button onClick={onClick}>+</button>
        <input placeholder="習慣を入力" value={habitText} onChange={onChange} />
        <ul className="list-row">
          {
            (habitLists.map = (habitLists) => {
              return (
                <>
                  <li>{habitLists}</li>
                  <p>0</p>
                  <button>カウント</button>
                </>
              );
            })
          }
        </ul>
      </div>
    </section>
  );
};
