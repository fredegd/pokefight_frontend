import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "../App.css";

const PokemonCard = ({pokemon, selection, setSelection}) => {

  

  return (
    // <>
    <div className="col mb-4"  >
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{pokemon.name.english}</h3>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  className="card-img-top"
                  alt="..."
                />
                <div>
                  <strong>Type:</strong>
                  {pokemon.type.map((type, typeIndex) => (
                    <span key={typeIndex}>{type}</span>
                  ))}
                </div>
                <div>
                  <strong>Base Stats:</strong>
                  {Object.entries(pokemon.base).map(([stat, value]) => (
                    <div key={stat}>
                      <span>{stat}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
  );
};

export default PokemonCard;

