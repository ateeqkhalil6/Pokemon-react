import React from 'react'
import { useState } from "react";

export const Card = (props) => {
  return (
    <section className="">
      <div className="w-full h-full overflow-hidden p-[20px] space-y-[15px">
        <ul className="grid grid-cols-1 lg:grid lg:grid-cols-4 gap-[30px] relative">
          {/* {props.pokemon.map((curPokemon) => { */}
          {props.searchContent.map((curPokemon) => {
            return (
              <li key={curPokemon.id} className="relative flex flex-col items-center p-[20px_10px] rounded-md shadow-lg bg-white space-y-[20px] hover:scale-105 transition-all duration-300">
                <div className="w-[80%] absolute top-0 bg-green-100 blur-[2px] h-[100px] rounded-bl-3xl rounded-tr-3xl hover:rounded-b-full transition-all duration-300 hover:scale-110 hover:top-1"></div>
                <img src={curPokemon.sprites.other.dream_world.front_default} alt={curPokemon.name} className="z-10 w-[100px] h-[100px]" />
                <h1 className='z-10 text-2xl font-bold capitalize'>{curPokemon.name}</h1>
                <p className="bg-green-700 rounded-full p-[5px_20px] text-white z-10 capitalize">{curPokemon.types.map((curType)=>curType.type.name).join(', ')}</p>
                <div className="flex flex-wrap gap-5 justify-center capitalize">
                  <h1 >height: <span className='font-semibold'>{curPokemon.height}</span></h1>
                  <h1>weight: <span className='font-semibold'>{curPokemon.weight}</span></h1>
                  <h1>speed: <span className='font-semibold'>{curPokemon.stats[5].base_stat}</span></h1>
                  <h1>experience: <span className='font-semibold'>{curPokemon.base_experience}</span></h1>
                  <h1>attack: <span className='font-semibold'>{curPokemon.stats[1].base_stat}</span></h1>
                  <h1>abilities: <span className='font-semibold'>{curPokemon.abilities[0].ability.name}</span></h1>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
