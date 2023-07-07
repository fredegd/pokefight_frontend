import React from 'react'
import { useState } from "react";
import '../components/battle.css';

export default function FightEnvironment() {




  return (
    <div className='battleground'>
      <button className='fightbutton'>Fight</button>
      <div className='player'></div>
      <div className='opponent'></div>

    </div>
  )
}
