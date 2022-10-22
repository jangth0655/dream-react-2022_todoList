import { useState } from "react";
import { v4 } from "uuid";
import styles from "./addTodo.module.css";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    const {
      currentTarget: { value },
    } = event;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    onAdd({ id: v4(), text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        onChange={handleChange}
        value={text}
        type="text"
        placeholder="Write your todos"
      />
      <button className={styles.button}>Add</button>
    </form>
  );
};
export default AddTodo;
