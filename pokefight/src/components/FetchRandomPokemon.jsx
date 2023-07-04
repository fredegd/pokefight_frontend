import { useState, useEffect } from "react";
import axios from "axios";

export default function FetchRandom() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokefight-gmoc.onrender.com/pokemon`)
      .then((response) => {
        setPokemonList(response.data);
      })
      .catch((err) => console.error(err, "URL not found"));
  }, []);

  const selectRandomPokemon = () => {
    const shuffled = [...pokemonList];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const selected = shuffled.slice(0, 16);
    setSelectedPokemon(selected);
    // console.log(selected);
  };
  return (
    <div>
      <button onClick={selectRandomPokemon} disabled={pokemonList.length === 0}>
        Randomize
      </button>
      {selectedPokemon.map((pokemon) => {
        return <h1>{pokemon.name.english}</h1>;
      })}
    </div>
  );
}
