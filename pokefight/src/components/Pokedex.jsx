import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

import PokemonThumbnail from "./PokemonThumbnail";
export default function pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonThumbnails, setPokemonThumbnails] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokefight-gmoc.onrender.com/pokemon`)
      .then((response) => {
        setPokemonList(response.data);
      })
      .catch((err) => console.error(err, "URL not found"));
  }, []);

  pokemonList.map((pokemon) => {
    if(pokemon.name.english != null){
      const stringLowered = pokemon.name.english.toLowerCase();
      const url = `https://pokeapi.co/api/v2/pokemon/${stringLowered}`;
  
      axios
        .get(url)
        .then((response) => {
         //console.log(response.data)
          const {name, sprites}= response.data
          if (sprites){
            console.log(name,sprites.front_default)
  
          }
        //  setPokemonThumbnails({name, sprites})
        })
        .catch((err) => console.log(err));
    }
    
  });

  return (
    <>
      {/* <div className="player">
        <h1>POKEDEX</h1>
        {pokemonList != [] &&
          pokemonList.map((pokemon) => {
            return (
              <div key={pokemon.id}>
                <PokemonThumbnail pokemon={pokemon} thumbnail={thumbnail} />
              </div>
            );
          })}
      </div> */}
    </>
  );
}
