import React from "react";
import { Route, Routes} from "react-router-dom";

import Navigation from "./components/Navigation";
import Pokedex from "./components/Pokedex"
import FightEnvironment from "./components/FightEnvironment"
import Leaderboard from "./components/Leaderboard"
import PokemonDetail from "./components/PokemonDetail"

import "./index.css";
import Landing from "./components/Landing";
const amount = 3;
const App = () => {
  return (
    <>
<Navigation />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/fight" element={<FightEnvironment />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/:pokemonName" element={<PokemonDetail/>} />
        </Routes>
      </div>
    </>
   
  );
};

export default App;
