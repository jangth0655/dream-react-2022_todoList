import { FaTrashAlt } from "react-icons/fa";
import styles from "./todo.module.css";

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text, status, id } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        onChange={handleChange}
        id={id}
        type="checkbox"
        checked={status === "completed"}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
};
export default Todo;
