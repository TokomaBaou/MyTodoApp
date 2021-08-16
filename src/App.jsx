import { React, useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";
import { HabitList } from "./components/habitList";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [habitText, setHabitText] = useState("");
  const [habitLists, setHabitLists] = useState([]);

  const onChangeText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // alert(todoText);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    //何を削除するのか、いくつ削除するのか
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onChangeHabitText = (event) => setHabitText(event.target.value);

  const onClickAddhabit = () => {
    if (habitText === "") return;
    const newHabits = [...habitLists, habitText];
    setHabitLists(newHabits);
    // alert(habitText);
    setHabitText("");
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onClick={onClickAdd}
        onChange={onChangeText}
      />
      <div className="main-wrapper">
        <IncompleteTodo
          todos={incompleteTodos}
          onClickDelete={onClickDelete}
          onClickComplete={onClickComplete}
        />
        <CompleteTodo todos={completeTodos} onClickBack={onClickBack} />
        <HabitList
          habitText={habitText}
          habitLists={habitLists}
          onClick={onClickAddhabit}
          onChange={onChangeHabitText}
        />
      </div>
    </>
  );
};

export default App;
