import { useState } from 'react'
import './App.css'
//----------------------------------------import dependency
import RecipeCard from './components/RecipeCard'
import SearchBar from './components/SearchBar'
//------------------------------------------import components
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
function App() {
 

  return (
    <div className='container'>
      <h2>Our Food Recipes</h2>
      <SearchBar/>
      <div className="recipes">
        <RecipeCard/>
      </div>
    </div>
  )
}

export default App
