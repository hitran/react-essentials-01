import { type PropsWithChildren } from "react";

type TabButtonProps = PropsWithChildren<{
  onSelect: () => void;
  isSelected: boolean;
}>;

function TabButton({ children, onSelect, isSelected }: TabButtonProps) {
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
