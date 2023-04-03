import React from 'react';
import CocktailCard from './CocktailCard';

function CocktailList({ cocktails }) {
  return (
    <div>
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.id} cocktail={cocktail} />
      ))}
    </div>
  );
}

export default CocktailList;
