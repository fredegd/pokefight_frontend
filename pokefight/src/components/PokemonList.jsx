import PokemonThumbnail from "./PokemonThumbnail";
import "../App.css"
export default function PokemonList({ pokemonArray }) {
  return (
    <div className="pokemon-list">
      {pokemonArray.map((pokemon) => {
        return <PokemonThumbnail key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
}
