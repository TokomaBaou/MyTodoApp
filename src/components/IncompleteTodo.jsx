import React from "react";

export const IncompleteTodo = () => {
  return (
    <section className="incomplete-area">
      <p className="title">本日の未完了タスク</p>
      <div>
        <ul className="list-row">
          <li>ああああ</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
    </section>
  );
};
