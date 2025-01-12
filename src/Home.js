import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router'
import './App.css'

function Home() {
    let navigator = useNavigate()
    const [search, setSearch] = useState('')

  return (
    <div className='bgimage'>
      <div>
        <h2 className='brandname'>Pixabay</h2>
        <div className='authentication'>
            <button>Login</button> 
            <button>Sign Up</button> 
        </div>
      </div>
      <div id='hero' >
        <h1 className='header1'>Stunning royalty-free images & royalty-free stock</h1>
        <h2 className='header2'>Over 5.2 million+ high quality stock images, videos and music shared by our talented community.</h2>
        <div className='form'>
        <input type='text' placeholder='Search for free images, Videos, Music & more' value={search} onChange={(e) => {setSearch(e.target.value)} } /> <br></br>
        <br></br><button className='search' onClick={() => { search && navigator(`/search/${search}`)}}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Home
