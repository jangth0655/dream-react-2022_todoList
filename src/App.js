import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import TodoList from "./components/todoList/TodoList";

const filters = ["all", "active", "completed"];
const App = () => {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
};
export default App;
