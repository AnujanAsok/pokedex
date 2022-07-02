import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import PokemonCard from "./PokemonCard";

const printPokemonNameWithExclamation = (pokemon) =>
  console.log(pokemon.name + "!");

function App() {
  const [listOfPokemon, setListOfPokemon] = useState([]);
  const [selectedPokemonData, setSelectedPokemonData] = useState({});
  const pokemonurl = "https://pokeapi.co/api/v2/pokemon?limit=150";
  const [allPokemon, setAllPokemon] = useState([]);
  const listOfPokemonNamesURL = "https://pokeapi.co/api/v2/pokemon?limit=150";

  // useEffect(() => {
  //   axios.get(pokemonurl).then((response) => {
  //     setListOfPokemon(response.data.results);
  //     console.log("here");
  //     console.log(response);
  //     console.log("bulbasaur", response.data.results[0]);
  //   });
  // }, []);

  useEffect(() => {
    axios(listOfPokemonNamesURL).then(async (result) => {
      const listOfPokemonNames = result.data.results;

      // listOfPokemonNames will look something like:
      // [
      //   { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1"},
      //   { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2"},
      //   { name: "venasaur", url: "https://pokeapi.co/api/v2/pokemon/3"},
      //   etc
      // ]

      const listOfPokemonWithData = await getAllPokemonData(listOfPokemonNames);

      // listOfPokemonWithData will look something like:
      // [
      //   { name: "bulbasaur", sprites: {etc}, moves: {etc}, abilities: {etc}},
      //   { name: "ivysaur", sprites: {etc}, moves: {etc}, abilities: {etc}},
      //   { name: "venasaur", sprites: {etc}, moves: {etc}, abilities: {etc}},
      //   etc
      // ]

      setAllPokemon(listOfPokemonWithData);
      // and then we set `allPokemon` to be that.
    });
  }, []);

  // Check the console and you'll see that `allPokemon` has everything you need.
  console.log("allPokemon", allPokemon);
  console.log("listOfPokemon", listOfPokemon);
  console.log("kadabraData", selectedPokemonData);
  // doSomething();
  return (
    <div className="App">
      <div className="cardsContainer">
        {allPokemon.map((pokemon) => (
          <PokemonCard pokemon={pokemon}></PokemonCard>
        ))}
      </div>
    </div>
  );
}

const getAllPokemonData = async (listOfPokemonNames) => {
  const listOfPokemonWithData = [];
  for (let i = 0; i < listOfPokemonNames.length; i++) {
    // We're gonna loop through every pokemon in the array and
    // hit the url for that pokemon to get its data.
    const result = await axios(listOfPokemonNames[i].url);

    // Then we'll pop that data into a new array (listOfPokemonWithData);
    listOfPokemonWithData.push(result.data);
  }
  return listOfPokemonWithData;
};

export default App;
