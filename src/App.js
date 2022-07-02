import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./PokemonCard";
import pokeball from "./dlf.pt-pokeball-pixel-png-5970982.png";
import preloadedPokemonData from "./preloadingPokemonData";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAllPokemon(preloadedPokemonData());
    }, 1500);
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
            <strong>
              <h1>Loading...</h1>
            </strong>
          </figcaption>
        </figure>
      )}
    </div>
  );
}

export default App;
