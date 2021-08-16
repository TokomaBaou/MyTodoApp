import React from "react";

export const IncompleteTodo = (props) => {
  const { todos, onClickDelete, onClickComplete } = props;
  return (
    <section className="incomplete-area">
      <p className="title">本日の未完了タスク</p>
      <div>
        {todos.map((todos, index) => {
          return (
            <>
              <ul className="list-row">
                <li>{todos}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </ul>
            </>
          );
        })}
      </div>
    </section>
  );
};
