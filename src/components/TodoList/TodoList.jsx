import { useState } from "react";
import AddTodo from "../addTodo/AddTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
  ]);

  const handleAdd = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  console.log(todos);

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};
export default TodoList;
