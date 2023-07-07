import React from 'react'
import { useState } from "react";

import { useState} from "react";
import FetchRandomPokemon from './FetchRandomPokemon';
import Arena from './Arena';
import '../components/battle.css';

export default function FightEnvironment() {
const pokemonAmount =8;
const playerName = "John"

const[selection, setSelection]=useState()


  return (
    <div className='battleground'>
      <button className='fightbutton'>Fight</button>
      <div className='player'></div>
      <div className='opponent'></div>

    </div>
 
  return (
    <>
    <FetchRandomPokemon playerName={ playerName} pokemonAmount={pokemonAmount } selection={selection} setSelection={setSelection} />
    <Arena playerName={ playerName}  selection={selection}/>
    </>
  )
}
