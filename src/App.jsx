/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
//----------------------------------------import dependency
import RecipeCard from './components/RecipeCard'
import SearchBar from './components/SearchBar'
//------------------------------------------import components
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const[isLoading, setisLoading] = useState(false);
  const [query, setQuery] = useState('');
  const[recipe, setRecipe] = useState([]);

  //search Recipe function

  const searchRecipe = async (searchTerm) => {
    setisLoading(true);
    const url = apiUrl + searchTerm;
    try {
      let res = await axios.get(url);
      console.log(res.data);
      setRecipe(res.data)
      setisLoading(false);

    } catch (err) {
      console.error(err);
    }
  }

  useEffect(()=> {
    searchRecipe("egg")
  }, [])
 

  return (
    <div className='container'>
      <h2>Recipe App</h2>
      <div className="recipes">
      {recipe ? <RecipeCard recipe={recipe}/> :<p>No Recipes</p>}
      </div>
    </div>
  )
}

export default App
