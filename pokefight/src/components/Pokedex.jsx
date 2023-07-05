import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

import PokemonThumbnail from "./PokemonThumbnail";
export default function pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonThumbnails, setPokemonThumbnails] = useState([]);
  const [paged, setPaged] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokefight-gmoc.onrender.com/pokemon`)
      .then((response) => {
        setPokemonList(response.data);
      })
      .catch((err) => console.error(err, "URL not found"));
  }, []);
let arr = []
  useEffect(() => {
   for (let i = 1; i < 21; i++) {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => {
      const{name,sprites}=response.data
      // console.log(response.data)
      arr.push({name,sprites})
    })
    .catch((err) => console.error(err, "URL not found"));
    
   }
   setPaged(arr);
  }, []);

  
  return (
    <>
      <div className="player">
        <h1>POKEDEX</h1>
        {paged!=[] &&
          paged.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <PokemonThumbnail pokemon={pokemon} />
              </div>
            );
          })}
      </div>
    </>
  );
}
