/* eslint-disable no-unused-vars */
import React from 'react'

const RecipeCard = ({recipe}) => {
   console.log(recipe);
   //const {idMeal,strMeal,strCategory,strMealThumb} = recipe;
  return (
    <div className='card'>
        <img src={recipe.strMealThumb} alt="" />
        <div className="card-body">
            <span className="category">{recipe.strCategory}</span>
        </div>
        
    </div>
  )
}

export default RecipeCard