import React from "react";
import { useState } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Fight from "./components/Fight";
import FetchRandomPokemon from "./components/FetchRandomPokemon";
// import PokemonList from "./components/PokemonList";
// import PokemonFight from "./components/PokemonFight";
const amount = 3;
const App = () => {
  return (
    <div className="App">
      <FetchRandomPokemon playerNumber={"1"} pokemonAmount={amount}/>
      <FetchRandomPokemon playerNumber={"2"} pokemonAmount={amount}/>
    </div>
  );
};

export default App;
