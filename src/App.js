import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
const App = () => {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
};
export default App;
