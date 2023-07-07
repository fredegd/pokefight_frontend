import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import  axios  from "axios";


export default function PokemonDetail({id}) {
  const params = useParams
  const [pokemonInfo, setPokemonInfo] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        console.log(response.data)
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
          <img src={pokemonInfo.sprites.back_default} alt={pokemonInfo.name} />
          <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
          {pokemonInfo.types.map((item) => {
            return <p key={item.type.name}> {item.type.name} </p>;
          })}
        </div>
      )}
    </>
    

  )
}
