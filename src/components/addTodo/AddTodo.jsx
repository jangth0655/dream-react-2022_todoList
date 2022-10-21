import { useState } from "react";

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
    onAdd({ id: Date.now(), text, status: "active" });
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
