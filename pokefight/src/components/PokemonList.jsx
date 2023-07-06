import PokemonThumbnail from "./PokemonThumbnail";
import "../App.css"
export default function PokemonList({ pokemonArray, setDetailId }) {
  return (
    <div className="pokemon-list">
      {pokemonArray.map((pokemon) => {
        return <PokemonThumbnail key={pokemon.name} pokemon={pokemon} setDetailId={setDetailId} />;
      })}
    </div>
  );
}
