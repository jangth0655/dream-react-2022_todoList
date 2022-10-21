import { FaTrashAlt } from "react-icons/fa";

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li>
      <input
        onChange={handleChange}
        id="check"
        type="checkbox"
        checked={status === "completed"}
      />
      <label htmlFor="check">{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
};
export default Todo;
