import { useState,useEffect } from "react";
import axios from 'axios'
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
/* eslint-disable no-unused-vars */

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const RecipeSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);
    searchRecipe(search);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const searchRecipe = async (searchTerm) => {
    setIsLoading(true);
    const url = apiUrl + searchTerm;
    try {
      let res = await axios.get(url);
      console.log(res.data.meals);
      setRecipe(res.data.meals);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchRecipe('egg');
  }, []);

  return (
    <div>
      <SearchBar 
        value={search}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <div className="recipes">
        {isLoading ? (
          <p>Loading...</p>
        ) : recipe ? (
          <RecipeCard recipe={recipe} />
        ) : (
          <p>No Recipes Found</p>
        )}
      </div>
    </div>
  );
};

export default RecipeSearch;