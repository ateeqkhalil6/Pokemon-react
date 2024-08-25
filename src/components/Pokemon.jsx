import { useEffect, useState } from "react";
import { Card } from "./Card";
import Lottie from "lottie-react";
import loadingIcon  from "../loadingIcon.json";

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = `https://pokeapi.co/api/v2/pokemon?limit=50`;

    const fetchPokemon = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        // console.log(data);
        const detailedPokemonData = data.results.map(async (curPokemon) => {
          const res = await fetch(curPokemon.url);
          const data = await res.json();
          return data;
        });
        const detailedResponse = await Promise.all(detailedPokemonData);
        console.log(detailedResponse);
        setPokemon(detailedResponse);
        setLoading(false);
      } 
      catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    }; 

    useEffect(()=>{
        fetchPokemon();
    },[])

    if (loading) {
      return (
        <div className="w-full h-screen flex justify-center items-center">
          <Lottie animationData={loadingIcon} />
        </div>
      );
    }

    if (error) {
      return (
        <div className="w-full h-screen flex justify-center items-center">
          <h1 className="text-3xl font-bold">{error.message}</h1>
        </div>
      );
    }
//  search functionality 
    const searchContent = pokemon.filter(
      (curPokemon) => curPokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    const handleInputChange = (e) =>{
        e.preventDefault();
        setSearch(e.target.value);
    }

  return (
    <section className="w-full  py-[30px] space-y-5">
      <header>
        <h2 class="text-gray-900 text-4xl font-extrabold text-center capitalize">
          lets catch <span class="text-transparent bg-clip-text bg-gradient-to-r to-indigo-700 from-green-500">pokémon</span>
        </h2>
      </header>
      <div className="w-full flex justify-center">
        <input type="text" placeholder="Search Pokemon" value={search} onChange={handleInputChange} className="p-[10px_20px] w-[70%] lg:w-[25%] rounded-md outline-none border-b-2 border-green-900"/>
      </div>
      <Card pokemon={pokemon} searchContent={searchContent}/>
    </section>
  );
}
