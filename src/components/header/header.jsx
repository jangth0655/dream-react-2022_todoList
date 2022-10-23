import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";

const Header = ({ filters, filter, onFilterChange }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />} {darkMode && <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((f, i) => (
          <li key={i}>
            <button
              className={`${styles.filter} ${filter === f && styles.selected}`}
              onClick={() => onFilterChange(f)}
            >
              {f}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Header;
