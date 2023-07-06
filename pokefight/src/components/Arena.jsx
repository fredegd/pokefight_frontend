import PokemonThumbnail from "./PokemonThumbnail";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Arena({ playerName, selection }) {
  console.log(selection);
  const [pokemonPlayer, setPokemonPlayer] = useState();

  useEffect(() => {
    selection &&
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${selection}`)
        .then((response) => {
          console.log(response.data);
          setPokemonPlayer(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [selection]);
  console.log(pokemonPlayer);
  //calculate a random number to assign a pokemn to the computer

  // fetch the pokemon for player 1
  // fetch the pokemon for computer

  //fight happens here

  //push the result to the database

  return (
    <div>
     {pokemonPlayer &&
     <>
     <h1>Player Name: {playerName}</h1>
     <p>fight with {pokemonPlayer.name}</p>
     <img src={pokemonPlayer.sprites.back_default} alt={pokemonPlayer.name} />
     </> 
     
       }
    </div>
  );
}
