import typeColors from "./typeColors";

const Card = ({ pokemon, isFavorite, onClick }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const colorClass = typeColors[pokemon.type] ?? "normal";
  console.log(
    `Rendering Card for ${pokemon.name} with type ${pokemon.type} and color class ${colorClass}. Is favorite: ${isFavorite}`,
  );
  return (
    <div className={`card type--${colorClass}`}>
      <div className="card-header">
        <span> {pokemon.type}</span>
        <button
          className="favorite-button"
          onClick={onClick}
          aria-label={`Add ${pokemon.name} to favourites`}
          aria-pressed={isFavorite}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
      <div className="card-body">
        <img src={imageUrl} alt="" width="96" height="96" />
        <h3>{pokemon.name}</h3>
      </div>
      <div className="card-bottom">
        <span>HP {pokemon.hp}</span>
        <span>ATK {pokemon.attack}</span>
      </div>
    </div>
  );
};

export default Card;
