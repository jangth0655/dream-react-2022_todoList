const Header = ({ filters, filter, onFilterChange }) => {
  return (
    <header>
      <ul>
        {filters.map((f, i) => (
          <li key={i}>
            <button onClick={() => onFilterChange(f)}>{f}</button>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Header;
