import PokemonThumbnail from "./PokemonThumbnail";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Arena({ playerName, selection }) {
  //console.log(selection);
  const [pokemonPlayer1, setPokemonPlayer1] = useState();
  const [pokemonPlayer2, setPokemonPlayer2] = useState();
  const [winner, setWinner] = useState();

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
  //console.log(pokemonPlayer1);

  // fetch the pokemon for computer
  useEffect(() => {
    const randomPokemonId = Math.floor(Math.random() * 50) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
      .then((response) => {
        setPokemonPlayer2(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //let the  fight happens here
  const handleClick = () => {
    if (pokemonPlayer1 && pokemonPlayer2) {
      const player1HP = pokemonPlayer1.stats[0].base_stat;
      const player2HP = pokemonPlayer2.stats[0].base_stat;

      if (player1HP > player2HP) {
        setWinner(pokemonPlayer1);
      } else if (player2HP > player1HP) {
        setWinner(pokemonPlayer2);
      } else {
        setWinner(null);
      }
    }
  };

  //push the result to the database

  return (
    <>
      <div>
        {pokemonPlayer1 && (
          <>
            <h3>Player Name: {playerName}</h3>
            <p>fight with {pokemonPlayer1.name}</p>
            <img
              src={pokemonPlayer1.sprites.back_default}
              alt={pokemonPlayer1.name}
            />
          </>
        )}
      </div>
      <div>
        {pokemonPlayer2 && (
          <>
            <h3>Player Name: Online</h3>
            <p>fight with {pokemonPlayer2.name}</p>
            <img
              src={pokemonPlayer2.sprites.front_default}
              alt={pokemonPlayer2.name}
            />
          </>
        )}
      </div>
      <button onClick={handleClick}>Start the Fight!!</button>
      <h3>Winner: {winner ? winner.name : "Draw"}</h3>
    </>
  );
}
