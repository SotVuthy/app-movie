import React from 'react'
import { useState, useEffect } from 'react';
import '../Assets/SiginForm/Home.scss'
import Card from '../Components/Card/Card'
import Loading from '../Components/Loading/Loading'
import '../Components/Loading/Loading.scss'

export default function Series() {
  const base_url='https://api.themoviedb.org/3'
  const url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014&api_key="+ process.env.REACT_APP_API_KEY;

  const [movieData,setData] = useState([]);
  const [url_set,setUrl] = useState(url);

  useEffect(() =>{
    fetch(url_set,setUrl).then(res=>res.json()).then(data=>{
      console.log(data.results);
      setData(data.results);
    });
  },[url_set])

  return (
    <div className='container-page'>
      <p className='movie-box'>Series</p>
      <div className="Card-homepage-info">
      {
        (movieData.length === 0)?<Loading/> :movieData.map((res,pos)=>{
          return(
            <Card info={res} key={pos}/>
          )
        })
      }
      </div>      
    </div>
  )
}
