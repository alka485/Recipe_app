/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
//------------------------------------------------------------import dependencies
import Home from './components/Home'
import RecipeSearch from './components/RecipeSearch'
import Navbar from './components/NavBar'
//import Navbar from './components/Navbar'
//-------------------------------------------------------------import components
import './App.css'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path ='/recipes' element={<RecipeSearch/>}/> 
      </Routes>
    </div>
  )
}

export default App
