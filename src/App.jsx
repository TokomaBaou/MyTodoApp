import React from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";
import { HabitList } from "./components/habitList";

const App = () => {
  return (
    <>
      <InputTodo />
      <div className="main-wrapper">
        <IncompleteTodo />
        <CompleteTodo />
        <HabitList />
      </div>
    </>
  );
};

export default App;
