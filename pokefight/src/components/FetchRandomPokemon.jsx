import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import PokemonCard from "./PokemonCard";

export default function FetchRandomPokemon({ playerName, pokemonAmount, selection, setSelection }) {
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
        const random = randomPokeList.slice(0, pokemonAmount);
        setRandomSelection(random);
        console.log(random);
      })
      .catch((err) => console.error(err, "URL not found"));
  }, []);

  const handleClick = (id) => {
    console.log(id,"was selected")
    setSelection(id)
   // console.log(`${pokemon.name.english} was selected!`);
  };

  return (
    <>
      <div className="player">
        <h1>player {playerName}</h1>
        {randomSelection != [] &&
          randomSelection.map((pokemon) => {
            console.log(pokemon,"fetchingR")
            return (
              <div className="" key={pokemon.id} >
                <PokemonCard pokemon={pokemon} onClick={handleClick(pokemon.id)} />
              </div>
            );
          })}
      </div>
    </>
  );
}
