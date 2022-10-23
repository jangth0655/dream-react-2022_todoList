import { useEffect, useState } from "react";
import AddTodo from "../addTodo/AddTodo";
import Todo from "../todo/Todo";
import styles from "./todolist.module.css";

const TODO_KEY = "todos";

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState(() => readTodoFromLocalStorage());

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

  const filtered = getFilteredItems(todos, filter);

  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
  }, [todos]);

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

const readTodoFromLocalStorage = () => {
  const todos = localStorage.getItem(TODO_KEY);
  return todos ? JSON.parse(todos) : [];
};

const getFilteredItems = (todos, filter) => {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};
