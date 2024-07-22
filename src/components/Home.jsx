/* eslint-disable no-unused-vars */
import React from 'react'

const Home = () => {
  return (
    <div className='homePage'>
        <h1 className='homeTitle'>Welcome to Mithass</h1>
        <p className='homeDesc'>Find delicious recipes and save your favorites!</p>
        <button className='homeBtn'><a href='/recipes'>Start Finding Recipes</a></button>
    </div>
  )
}

export default Home