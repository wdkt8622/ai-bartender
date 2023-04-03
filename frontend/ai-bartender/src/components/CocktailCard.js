import React from 'react';

function CocktailCard({ cocktail }) {
  return (
    <div>
      <h2>{cocktail.name}</h2>
      <img src={cocktail.image} alt={cocktail.name} />
      <p>{cocktail.description}</p>
    </div>
  );
}

export default CocktailCard;
