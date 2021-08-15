import React from "react";

export const HabitList = () => {
  return (
    <section className="habit-area">
      <p className="title">習慣リスト</p>
      <div>
        <button>+</button>
        <input placeholder="習慣を入力" />
        <ul className="list-row">
          <li>歯を磨く</li>

          <p>0</p>
          <button>カウント</button>
        </ul>
      </div>
    </section>
  );
};
