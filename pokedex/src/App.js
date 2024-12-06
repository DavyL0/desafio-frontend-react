import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons, searchPokemon } from './api';


function App() {

  const [page, setPage] = useState(0)
  const [totalPages, setTotalPage] = useState(0)

  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const itensPerPage = 24

  const onSearchHandler = async (pokemon) => {
    if(!pokemon){
      return fetchPokemons();
    }

    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result){
      setNotFound(true)
    }else{
      setPokemons([result])
      setPage(0)
      setTotalPage(1)
    }
    setLoading(false)

  }

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPage(Math.ceil(data.count / itensPerPage))

    } catch (error) {
      console.log("fetchPokemons error: ", error)
    }
  }

  useEffect(()=> {
    console.log("carregou")
    fetchPokemons();
  }, [page])


  return (
    <div>
      <Navbar />
      <Searchbar onSearch = {onSearchHandler}/>
      {notFound ? (
        <div className='not-found-text'>Esse pokemon não existe tenta outro</div>
      ):
      <Pokedex 
      pokemons={pokemons} 
      loading={loading} 
      page={page} 
      totalPages={totalPages}
      setPage={setPage}
      />}
      
    </div>
  );
}

export default App;
