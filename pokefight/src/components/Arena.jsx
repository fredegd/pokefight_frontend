import PokemonThumbnail from "./PokemonThumbnail";

export default function Arena({ playerName, selection }) {
    console.log(selection)
  return (
    <div>
      <h1>{playerName}</h1>
      <div>
        {/* <PokemonThumbnail pokemon={selection} /> */}
      </div>
    </div>
  );
}
