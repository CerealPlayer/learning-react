import { Fragment } from "react";
import Todo from "../models/todos";

import ToDoItem from "./ToDoItem";

import classes from "./ToDos.module.css";

const ToDos: React.FC<{ items: Todo[]; onDelete: (key: string) => void }> = (
  props
) => {
  const onDeleteHandler = (key: string) => {
    props.onDelete(key);
  };
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <div className={classes.item}>
          <ToDoItem key={item.id} text={item.text} />
          <button onClick={onDeleteHandler.bind(null, item.id)}>Delete</button>
        </div>
      ))}
    </ul>
  );
};

export default ToDos;
