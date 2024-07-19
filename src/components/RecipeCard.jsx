/* eslint-disable no-unused-vars */
import React from 'react'

const RecipeCard = ({recipe}) => {
   console.log(recipe.meals);
   //const {idMeal,strMeal,strCategory,strMealThumb} = recipe.meals;
  return (
    <div className='card'>
        {/* <img src={recipe.strMealThumb} alt="" /> */}
        <h1>Hello{}</h1>
        <div className="card-body">
            {/* <span className="category">{strCategory}</span> */}
        </div>
        
    </div>
  )
}

export default RecipeCard