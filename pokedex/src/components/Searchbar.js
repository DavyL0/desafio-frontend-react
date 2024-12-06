import React, { useState } from "react";

const Searchbar = (props) => {
    const [search, setSearch] = useState("");
    const { onSearch } = props;

    const onChangeHandler = (e) => {
        console.log("pokemon: ", e.target.value);
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
            onSearch(undefined);
        }
    };

    const onButtonClickHandler = () => {
        onSearch(search);
    };

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input 
                    placeholder="Buscar Pokémon" 
                    value={search} 
                    onChange={onChangeHandler}
                />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>
                    <img src="/search-button.svg" alt="search button" />
                </button>
            </div>
        </div>
    );
};

export default Searchbar;
