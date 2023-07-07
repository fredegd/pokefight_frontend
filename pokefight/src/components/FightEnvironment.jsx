import React from 'react'
import { useState } from "react";
import FetchRandomPokemon from './FetchRandomPokemon';
import Arena from './Arena';
import "../App.css"
export default function FightEnvironment() {
  const pokemonAmount = 8;
  const playerName = "John"

  const [selection, setSelection] = useState()


  return (
    <div className='cardsContainer'>
      <FetchRandomPokemon playerName={playerName} pokemonAmount={pokemonAmount} selection={selection} setSelection={setSelection} />
      <Arena playerName={playerName} selection={selection} />
    </div>
  )
}
