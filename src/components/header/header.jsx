import styles from "./header.module.css";

const Header = ({ filters, filter, onFilterChange }) => {
  return (
    <header className={styles.header}>
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
