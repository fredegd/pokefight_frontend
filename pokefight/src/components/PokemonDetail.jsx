import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import  axios  from "axios";


export default function PokemonDetail() {
  const [pokemonInfo, setPokemonInfo] = useState();

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((response) => {
        setPokemonInfo(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);


  return (
    <>
     {pokemonInfo && (
        <div className="pokemon-details">
          <img src={pokemonInfo.sprites.back_default} alt={pokemon.name} />
          <img src={pokemonInfo.sprites.front_default} alt={pokemon.name} />
          {pokemonInfo.types.map((item) => {
            return <p key={item.type.name}> {item.type.name} </p>;
          })}
        </div>
      )}
    </>
    

  )
}
