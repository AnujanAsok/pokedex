import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./PokemonCard";
import pokeball from "./dlf.pt-pokeball-pixel-png-5970982.png";
import preloadedPokemonData from "./preloadingPokemonData";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);

  // useEffect(() => {
  //   axios.get(pokemonurl).then((response) => {
  //     setListOfPokemon(response.data.results);
  //     console.log("here");
  //     console.log(response);
  //     console.log("bulbasaur", response.data.results[0]);
  //   });
  // }, []);

  useEffect(() => {
    console.log("list of pokemone names");
    setAllPokemon(preloadedPokemonData());
  }, []);

  return (
    <div className="App">
      <div className="cardsContainer">
        {allPokemon.map((pokemon) => (
          <PokemonCard pokemon={pokemon}></PokemonCard>
        ))}
      </div>
      {allPokemon.length === 0 && (
        <figure>
          <img
            src={pokeball}
            className="spinningPokeball"
            alt="spinning pokeball"
          ></img>
          <figcaption>
            <strong>Loading</strong>
          </figcaption>
        </figure>
      )}
    </div>
  );
}

export default App;
