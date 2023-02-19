import React from 'react';
import Slide from '../Components/Slide/Slide';
import { SlideData } from '../Components/Slide/SlideData';
import '../Assets/SiginForm/Home.scss'
import PopularCard from '../Components/swiper/PopularCard';
import ComedieCard from '../Components/swiper/ComedieCard'


export default function Home() {
  return (
    <div className='container-page'>
      <Slide slides={SlideData}/>
      <p className='intro-home'>&emsp;&emsp; Welcome to MovieCool. This Website allow you to watch online movies, movies streaming free, free movies, free full hd movies, watch series online, watch full movies free, download movies hd, series online free, series online hd, watch series online free.
      Your Favorite Movies and Shows are always ready for live streaming and downloading from all around the world.</p>
      <p className='movie-box'>Popular Movie</p>
      <div className="Card-homepage-info">
        <PopularCard/>
      </div>   
      <p className='movie-box'>Comedies</p>
      <div className="Card-homepage-info">
        <ComedieCard/>
      </div>    
    </div>
  )
}
