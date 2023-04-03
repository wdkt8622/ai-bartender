import React, { useState } from 'react';

function InputForm({ onSubmit }) {
  const [mood, setMood] = useState('');
  const [ingredient, setIngredient] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(mood, ingredient);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mood:
        <input type="text" value={mood} onChange={(event) => setMood(event.target.value)} />
      </label>
      <label>
        Ingredient:
        <input type="text" value={ingredient} onChange={(event) => setIngredient(event.target.value)} />
      </label>
      <button type="submit">Find Cocktails</button>
    </form>
  );
}

export default InputForm;
