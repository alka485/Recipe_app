/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const RecipeCard = ({recipe}) => {
   
  return (
    <div className='card'>
       {recipe.map((recipeObj) => (
        <div key={recipeObj.idMeal} className='card'>
            <img 
                src={recipeObj.strMealThumb}
                alt={recipeObj.strMeal}
                className='card-image'
            />
            <div className="card-body">
                <span className="category">{recipeObj.strCategory}</span>
                <h3>{recipeObj.strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + recipeObj.idMeal} target="_blank">Instructions</a>
            </div>
        </div>
       ))}
        
    </div>
  )
}

export default RecipeCard