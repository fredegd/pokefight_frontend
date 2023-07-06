import PokemonThumbnail from "./PokemonThumbnail";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Arena({ playerName, selection }) {
  console.log(selection);
  const [pokemonPlayer1, setPokemonPlayer1] = useState();

  // fetch the pokemon for player 1
  useEffect(() => {
    selection &&
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${selection}`)
        .then((response) => {
          console.log(response.data);
          setPokemonPlayer1(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [selection]);
  console.log(pokemonPlayer1);
  //calculate a random number to assign a pokemn to the computer

  // fetch the pokemon for computer

  //let the  fight happens here

  //push the result to the database

  return (
    <div>
     {pokemonPlayer1 &&
     <>
     <h1>Player Name: {playerName}</h1>
     <p>fight with {pokemonPlayer1.name}</p>
     <img src={pokemonPlayer1.sprites.back_default} alt={pokemonPlayer1.name} />
     </> 
     
       }
    </div>
  );
}
