import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import PokemonCard from "./PokemonCard";
import "../App.css"
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

 

  
  return (
    <>
      <div className="random-Selection" >
        {randomSelection != [] && 
         !selection &&
          randomSelection.map((pokemon) => {
            return (
              <div key={pokemon.id}  onClick={() => setSelection(pokemon.id)} >

                <PokemonCard pokemon={pokemon} selection={selection} setSelection={setSelection}/>
              </div>
            );
          })}
      </div>
    </>
  );
}
