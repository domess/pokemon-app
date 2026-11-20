import typeColors from "./typeColors";

const TypeButton = ({ type, isSelected, onClick }) => {
  const colorClass = typeColors[type] ?? "normal";

  return (
    <button
      className={`type-button type--${colorClass} ${isSelected ? "selected" : ""}`}
      aria-pressed={isSelected}
      onClick={onClick}
    >
      {type === "Favorites" ? "★" : type}
    </button>
  );
};

export default TypeButton;
