import { useState } from "react";
import AddTodo from "../addTodo/AddTodo";
import Todo from "../todo/Todo";
import styles from "./todolist.module.css";

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const handleUpdate = (updatedTodo) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const handleDelete = (deleteTodo) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== deleteTodo.id));
  };

  const getFilteredItems = (todos, filter) => {
    if (filter === "all") {
      return todos;
    }
    return todos.filter((todo) => todo.status === filter);
  };

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};
export default TodoList;
