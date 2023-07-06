import React from 'react'

export default function PokemonCard({pokemon}) {
  console.log(pokemon)
  

  return (
    <div>
      <h2 >{pokemon.name.english}</h2>
    </div>
  )
}
