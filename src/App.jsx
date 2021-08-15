import { React, useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";
import { HabitList } from "./components/habitList";

const App = () => {
  const [todoText, setTodoText] = useState([""]);
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [habitLists, setHabitLists] = useState([]);

  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    alert(todoText);
  };

  return (
    <>
      <InputTodo onClick={onClickAdd} />
      <div className="main-wrapper">
        <IncompleteTodo />
        <CompleteTodo />
        <HabitList />
      </div>
    </>
  );
};

export default App;
