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

  useEffect(() => {
    selectRandomPokemon();
  }, [pokemonList]);
  const selectRandomPokemon = () => {
    const randomPokeList = [...pokemonList];
    for (let i = randomPokeList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomPokeList[i], randomPokeList[j]] = [
        randomPokeList[j],
        randomPokeList[i],
      ];
    }
    const selected = randomPokeList.slice(0, 16);
    setSelectedPokemon(selected);
    console.log(selected);
  };
  return (
    <div>
      {/* <button onClick={selectRandomPokemon} >
        Get 16 Random Pokemon
      </button> */}

      {selectedPokemon !== [] &&
        selectedPokemon.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <h1>{pokemon.name.english}</h1>
            </div>
          );
        })}
    </div>
  );
}
