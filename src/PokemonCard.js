import { useState } from "react";
const PokemonCard = (props) => {
  const [isStatsDisplayed, setIsStatsDisplayed] = useState("0");

  const typeToColor = {
    normal: "#A8A878",
    grass: "#78C850",
    fire: "#F08030",
    water: "#6890F0",
    bug: "#A8B820",
    poison: "#A040A0",
    electric: "#F8D030",
    ground: "#E0C068",
    fairy: "pink",
    fighting: "#C03028",
    psychic: "#F85888",
    rock: "#B8A038",
    ice: "#98D8D8",
    dragon: "#7038F8",
    flying: "#A890F0",
    steel: "grey",
    dark: "black",
    ghost: "#705898",
  };
  var firstType = props.pokemon.types[0].type.name;
  var secondType;
  var typeOutput;

  const moveList = props.pokemon.moves.slice(0, 4);
  console.log("image", props.pokemon.sprites.front_default);

  if (props.pokemon.types.length > 1) {
    secondType = props.pokemon.types[1].type.name;
    typeOutput = " / " + secondType;
  } else {
    secondType = firstType;
    typeOutput = "";
  }
  if (isStatsDisplayed === "0") {
    return (
      <div
        className="pokemonCard"
        onClick={() => {
          setIsStatsDisplayed("1");
        }}
      >
        <div className="modal">
          <div
            className="leftHalf"
            style={{
              backgroundColor: typeToColor[firstType],
            }}
          ></div>
          <div
            className="rightHalf"
            style={{
              backgroundColor: typeToColor[secondType],
            }}
          ></div>
          <div>
            {props.pokemon.name}
            <img
              src={props.pokemon.sprites.front_default}
              alt="Pokemon model"
            ></img>
            <div>
              <u>
                <strong>Type: </strong>
              </u>
            </div>
            {firstType}
            {typeOutput}
          </div>
        </div>
      </div>
    );
  } else if (isStatsDisplayed === "1") {
    return (
      <div
        className="pokemonCard"
        onClick={() => {
          setIsStatsDisplayed("2");
        }}
      >
        <div>
          <u>
            <strong>Stats List</strong>
          </u>
        </div>
        {props.pokemon.stats.map((statInfo) => (
          <div>
            {statInfo.stat.name} : {statInfo.base_stat}
          </div>
        ))}
      </div>
    );
  } else if (isStatsDisplayed === "2") {
    return (
      <div
        className="pokemonCard"
        onClick={() => {
          setIsStatsDisplayed("3");
        }}
      >
        <div>
          <u>
            <strong>Abilities List</strong>
          </u>
        </div>
        {props.pokemon.abilities.map((abilitySet) => (
          <div>{abilitySet.ability.name}</div>
        ))}
      </div>
    );
  } else if (isStatsDisplayed === "3") {
    return (
      <div
        className="pokemonCard"
        onClick={() => {
          setIsStatsDisplayed("0");
        }}
      >
        <div>
          <u>
            <strong> Top 5 Move List</strong>
          </u>
        </div>

        {moveList.map((moveset) => (
          <div>{moveset.move.name}</div>
        ))}
      </div>
    );
  }
};

export default PokemonCard;
