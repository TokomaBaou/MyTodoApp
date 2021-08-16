import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;
  return (
    <section className="complete-area">
      <p className="title">本日の完了タスク</p>
      <div>
        <ul className="list-row">
          {todos.map((todos, index) => {
            return (
              <>
                <li>{todos}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
