import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";

const filters = ["all", "active", "completed"];
const App = () => {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
};
export default App;
