import React from "react";
import AvatarFallback from "./AvatarFallback";

const Pokemon = (props) => {
  const { pokemon } = props;


  const getPokemonAbilities = () => {
    if (!pokemon.abilities || pokemon.abilities.length === 0) {
      return <div>Nenhuma habilidade encontrada.</div>;
    }

    return pokemon.abilities.map((abilityObj, index) => (
      <div key={index} className="pokemon-ability-text">
        {abilityObj.ability.name}
      </div>
    ));
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        {pokemon.sprites.front_default ? (
          <img
            alt={pokemon.name}
            src={pokemon.sprites.front_default}
            className="pokemon-image"
          />
        ) : (
          <AvatarFallback name={pokemon.name}/>
        )}
      </div>

      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>

        <div className="card-bottom">
          <div className="pokemon-ability">{getPokemonAbilities()}</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
