import { Link } from "react-router-dom";

export default function PokemonThumbnail({pokemon}) {
  console.log(pokemon.url)
  return (
    <div className="thumbnail">
      <Link to={`/${pokemon.name}`}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {pokemon.name}
      </Link>
    </div>
  )
}
