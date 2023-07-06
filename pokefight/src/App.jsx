import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Pokedex from "./components/Pokedex";
import FightEnvironment from "./components/FightEnvironment";
import Leaderboard from "./components/Leaderboard";
import PokemonDetail from "./components/PokemonDetail";

import "./index.css";
import Landing from "./components/Landing";
const amount = 3;
const App = () => {
  const [detailId, setDetailId] = useState();
  return (
    <>
      <Navigation />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pokedex" element={<Pokedex setDetailId={setDetailId}/>} />
          <Route path="/fight" element={<FightEnvironment />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route  path="/:pokemonName" element={<PokemonDetail id={detailId} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
