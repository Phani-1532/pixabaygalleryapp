import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { FiSearch } from 'react-icons/fi';
import './App.css'

function Home() {
  let navigator = useNavigate()
  const [search, setSearch] = useState('')

  return (
    <div className='bgimage'>
      <div className='header-container'>
        <h2 className='brandname'>Pixabay</h2>
        <div className='authentication'>
          <button className='auth-button'>Login</button>
          <button className='auth-button'>Sign Up</button>
        </div>
      </div>
      <div id='hero'>
        <h1 className='header1'>Stunning royalty-free images & stock</h1>
        <h2 className='header2'>Over 5.2 million+ high quality stock images, videos and music shared by our talented community.</h2>
        <div className='form'>
          <div className='search-container'>
            <FiSearch className='search-icon' />
            <input
              type='text'
              placeholder='Search for free images & more unique images'
              value={search}
              onChange={(e) => { setSearch(e.target.value) }}
              className='search-input'
            />
          </div>
          <button className='search' onClick={() => { search && navigator(`/search/${search}`) }}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Home
