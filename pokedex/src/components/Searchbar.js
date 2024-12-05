import React, {useState} from 'react';
import { searchPokemon } from '../api';


const Searchbar = () => {
    const [search, setSearch] = useState("dito")
    const [pokemon, setPokemon] = useState()

    const onChangehandler = (e) => {
        console.log("pokemon: ", e.target.value)
        setSearch(e.target.value)
    }
    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) =>{
        const result = await searchPokemon(pokemon)
        setPokemon(result)
  
    }

    return (
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input placeholder='buscar pokemon' onChange={onChangehandler}/>
            </div>
            <div className='searchbar-btn'>
                <button on onClick={onButtonClickHandler}>buscar</button>
            </div>
            {pokemon ? (
                    <div>
                       <div>Nome: {pokemon.name}</div>
                       <div>Peso: {pokemon.weight}</div>
                       <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
            ): null}
        </div>
    )
}

export default Searchbar