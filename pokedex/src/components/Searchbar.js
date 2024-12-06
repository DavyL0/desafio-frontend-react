import React, {useState} from 'react';
import { searchPokemon } from '../api';


const Searchbar = (props) => {
    const [search, setSearch] = useState()
    const {onSearch} = props 

    const onChangehandler = (e) => {
        console.log("pokemon: ", e.target.value)
        setSearch(e.target.value)
        if(e.target.value.length === 0){
            onSearch(undefined)
        }    
    }
    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input placeholder='buscar pokemon' onChange={onChangehandler}/>
            </div>
            <div className='searchbar-btn'>
                <button on onClick={onButtonClickHandler}>buscar</button>
            </div>
        </div>
    )
}

export default Searchbar