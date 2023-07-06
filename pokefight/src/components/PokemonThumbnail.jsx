import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonThumbnail({ pokemon }) {
  //this is in order to get the id
  const stringArray = pokemon.url.split("/");
  console.log(stringArray);
  const id = stringArray[stringArray.length - 2];



  return (
    <div className="pokemon">
      <Link to={`/${pokemon.name}`}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={pokemon.name}
      />
      <p> {pokemon.name} </p>
      </Link>
     
    </div>
  );
}
