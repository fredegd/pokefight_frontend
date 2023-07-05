
export default function PokemonThumbnail({thumbLink, pokemon}) {
  return (
    <div>
      <img src={thumbLink} alt="" />
      {pokemon.name.english}
    </div>
  )
}
