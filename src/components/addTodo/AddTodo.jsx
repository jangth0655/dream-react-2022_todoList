import { useState } from "react";
import { v4 } from "uuid";

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
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={text}
        type="text"
        placeholder="Write your todos"
      />
      <button>Add</button>
    </form>
  );
};
export default AddTodo;
