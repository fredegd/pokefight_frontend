import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import  axios  from "axios";


export default function PokemonDetail() {
    const navigate = useNavigate();
    const { pokemonName } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState({});

    useEffect(() => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then((response) => {
       
           const {name,sprites}=response.data
            setPokemonDetails({sprites,name})
          })
          .catch((err) => console.error(err, "URL not found"));
      }, []);
      console.log(pokemonDetails)
  return (
    <div>
        <h1>{pokemonDetails.name}</h1>
       { pokemonDetails.sprites.front_default &&
        <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />

        }
      
        
    </div>
  )
}
