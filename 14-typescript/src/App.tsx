import { useState } from "react";

import Todo from "./models/todos";
import ToDos from "./components/ToDos";
import "./App.css";
import NewTodo from "./components/NewToDo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const deleteTodo = (key: string) => {
    setTodos( prevState => {
      return prevState.filter(item => {
        return item.id !== key;
      })
    })
  };

  const addToDoHandler = (text: string) => {
    setTodos((prevState) => {
      return [...prevState, { id: text.charAt(0) + Math.random(), text: text }];
    });
  };
  return (
    <div>
      <NewTodo onAddToDo={addToDoHandler} />
      <ToDos items={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
