/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navBar'>
      <div>Recipe App</div>
      <div className='navbarLinks'>
        <Link className='navbarlink' to ='/'>Home</Link>
        <Link className='navbarlink' to ='/recipes'>RecipeSearch</Link>
      </div>
    </nav>
  )
}

export default Navbar