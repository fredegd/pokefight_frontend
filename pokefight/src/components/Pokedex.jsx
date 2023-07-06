import { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";

export default function Pokedex() {
  const [pokemonArray, setPokemonArray] = useState([]);
  // next and previous are the next and previous url that are used for pagination
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  // offset=0&limit=20 these are query parameters, they are used to filter the date that you get from the path
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=30"
  );

  // the useEffect function will run once after the initial mounting of the app component
  // the useEffect function will run again every time the url state is set with a new value by it's own state setter
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setNext(response.data.next);
        setPrevious(response.data.previous);
        setPokemonArray(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <>
      <div className="Pokedex">
        <h1>Pokemon</h1>
        <PokemonList pokemonArray={pokemonArray} />
        <Pagination next={next} previous={previous} setUrl={setUrl} />
        {/* footer */}
      </div>
    </>
  );
}

// useEffect(() => {
//   axios
//     .get(`https://pokefight-gmoc.onrender.com/pokemon`)
//     .then((response) => {
//       setPokemonList(response.data);
//     })
//     .catch((err) => console.error(err, "URL not found"));
// }, []);
