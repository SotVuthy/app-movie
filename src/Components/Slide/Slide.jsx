import React, { useState } from 'react'
import '../Slide/Slide.scss'
import { SlideData } from './SlideData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

export default function Slide({slides}){
  const [current , setCurrent] = useState(0)
  const length = slides.length;
  
  const nextSlide = () =>{
    setCurrent(current === length -1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1);
  };


  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
       {
        SlideData.map((slide,index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'}
            key={index}
            >
              {index === current && (                          
              <img className='slide-pic' src={slide.picture} alt='slider-im'></img>
              )}
            </div>
          )
        })}
    </section>
  )
}
