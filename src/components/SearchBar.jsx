/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

const SearchBar = (props) => {
  return (
    <div>
        <form>
            <input type='text'
                 onChange={props.handleInputChange} 
                 value = {props.value}
                 placeholder='Search Recipe'
                 className='form-control'
            />
            <button 
            onClick={props.handleFormSubmit}
            className='btn'
            >Search</button>
        </form>
        
    </div>
  )
}

export default SearchBar