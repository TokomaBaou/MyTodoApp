import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;
  return (
    <section className="complete-area">
      <p className="title">本日の完了タスク</p>
      <div>
        {todos.map((todos, index) => {
          return (
            <>
              <ul className="list-row">
                <li>{todos}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </ul>
            </>
          );
        })}
      </div>
    </section>
  );
};
