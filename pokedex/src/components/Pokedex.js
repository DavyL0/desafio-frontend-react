import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";

const Pokedex = (props) => {
    const {pokemons, loading, page, setPage, totalPages} = props;
    const onLeftClickHandler = () =>{
        if(page > 0){
            setPage(page-1)
        }
    }
    const onRightClickHandler = () =>{
        if(page+1 !== totalPages){
            setPage(page+1)
        }
    }
    return (
        <div>
            
            
            {loading ? (
                <div>Carregando, seu Monstro...</div>):
                (<div className="pokedex-grid"> 
                    {
                        pokemons && pokemons.map((pokemon, index) =>{
                             return(
                                <Pokemon key={index} pokemon={pokemon}/>
                             )
                        })
                    }
                </div>)
                } 

<div className="pokedex-pagination">
                <Pagination 
                    page={page+1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}

                />
            </div>

            
        </div>
    )
}

export default Pokedex;