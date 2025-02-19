function TabButton({ children, onSelect, isSelected }) {
  function handleClick() {
    onSelect();
  }

  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
