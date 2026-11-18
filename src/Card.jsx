// Which colour group each type belongs to (the class names in App.css)
const typeColors = {
  Grass: "grass",
  Fire: "fire",
  Water: "water",
  Electric: "lightning",
  Psychic: "psychic",
  Ghost: "psychic",
  Fighting: "fighting",
  Rock: "fighting",
  Dark: "darkness",
  Steel: "metal",
  Normal: "normal",
  Dragon: "multicolor",
  Fairy: "multicolor",
};

const Card = ({ pokemon }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const colorClass = typeColors[pokemon.type] ?? "normal";

  return (
    <div className={`card card--${colorClass}`}>
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
