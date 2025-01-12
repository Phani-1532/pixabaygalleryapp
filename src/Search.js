import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Search({match}) {
    const { search } = useParams()
    const [data,setData] = useState([])
    useEffect(() =>{
        axios.get(`https://pixabay.com/api/?key=48179794-e08dd0f528dab542905c968d2&q=${search}&image_type=photo&pretty=true`).then(res => setData(res.data.hits))
    },[])

    return (
      <div className='searchs'>
        <div className='row'>
            {data && data.map(data => <div className='col-md-4'>
                <div className='card'>
                <img src={data.webformatURL} alt={data.user} className='img-fluid' height='300px' />
                <div className='card-body'>
                    <h4 className='card-title'>{data.tags}</h4>
                </div>
                <div className='card-footer'>
                <p>Views : {data.views} views</p>
                <p>Downloads : {data.downloads} downloads</p>
                <p>Likes : {data.likes} likes</p>
                <p>Comments : {data.comments} comments</p>
                <p> URL : {data.pageURL}</p>
                </div>
  
                </div>
            </div>)}
        </div>
      </div>
    )
}

export default Search
