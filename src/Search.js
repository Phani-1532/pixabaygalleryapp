import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Search.css'
import { FiSearch } from 'react-icons/fi'

function Search() {
    const { search } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=48179794-e08dd0f528dab542905c968d2&q=${search}&image_type=photo&pretty=true`)
            .then(res => setData(res.data.hits))
    }, [search])

    return (
        <div className='search-container'>
            <h2 className='search-title'>Results for: {search}</h2>
            <div className='row'>
                {data && data.map(item => (
                    <div className='col-md-4 col-sm-6 mb-4' key={item.id}>
                        <div className='card'>
                            <img src={item.webformatURL} alt={item.user} className='img-fluid' />
                            <div className='card-body'>
                                <h4 className='card-title'>{item.tags}</h4>
                            </div>
                            <div className='card-footer'>
                                <h5>Info</h5>
                                <p>Views: {item.views}</p>
                                <p>Downloads: {item.downloads}</p>
                                <p>Likes: {item.likes}</p>
                                <p>Comments: {item.comments}</p>
                                <p>URL: <a href={item.pageURL} target="_blank" rel="noopener noreferrer">{item.pageURL}</a></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search
