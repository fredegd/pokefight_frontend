import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "../App.css";

const PokemonCards = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          "https://pokefight-gmoc.onrender.com/pokemon"
        );
        const data = response.data;
        setPokemonData(data);
      } catch (error) {
        console.log("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div className="container">
      <h1>Pokemon Cards</h1>
      <div className="row row-cols-1 row-cols-md-5">
        {pokemonData.map((data, index) => (
          <div key={index} className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{data.name.english}</h3>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                  className="card-img-top"
                  alt="..."
                />
                <div>
                  <strong>Type:</strong>
                  {data.type.map((type, typeIndex) => (
                    <span key={typeIndex}>{type}</span>
                  ))}
                </div>
                <div>
                  <strong>Base Stats:</strong>
                  {Object.entries(data.base).map(([stat, value]) => (
                    <div key={stat}>
                      <span>{stat}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCards;
