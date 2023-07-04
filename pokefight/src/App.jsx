import React from 'react';
import './index.css';
import { Router, Routes, Route } from 'react-router-dom';
// import PokemonList from "./components/PokemonList";
// import PokemonFight from "./components/PokemonFight";


const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<PokemonList />} />
          <Route exact path="/pokemon/:id" element={<PokemonDetail />} />
          <Route exact path="/fight/" element={<PokemonFight />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
