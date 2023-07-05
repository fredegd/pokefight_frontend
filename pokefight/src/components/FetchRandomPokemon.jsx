import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

export default function FetchRandomPokemon({ playerName, pokemonAmount }) {
  const [randomSelection, setRandomSelection] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokefight-gmoc.onrender.com/pokemon`)
      .then((response) => {
        const randomPokeList = response.data;
        for (let i = randomPokeList.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [randomPokeList[i], randomPokeList[j]] = [
            randomPokeList[j],
            randomPokeList[i],
          ];
        }

        const selection = randomPokeList.slice(0, pokemonAmount);
        setRandomSelection(selection);
        console.log(selection);
      })
      .catch((err) => console.error(err, "URL not found"));
  }, []);

  return (
    <>
      <div className="player">
        <h1>player {playerName}</h1>
        {randomSelection != [] &&
          randomSelection.map((pokemon) => {
            return (
              <div key={pokemon.id}>
                <h3>{pokemon.name.english}</h3>
              </div>
            );
          })}
      </div>
    </>
  );
}
