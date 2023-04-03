import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import InputForm from './components/InputForm';
import CocktailList from './components/CocktailList';
import Footer from './components/Footer';

function App() {
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async (mood, ingredient) => {
    try {
      const response = await axios.get('/api/cocktails', { params: { mood, ingredient } });
      setCocktails(response.data);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  };

  useEffect(() => {
    fetchCocktails('', '');
  }, []);

  return (
    <div className="App">
      <Header />
      <InputForm onSubmit={fetchCocktails} />
      <CocktailList cocktails={cocktails} />
      <Footer />
    </div>
  );
}

export default App;
