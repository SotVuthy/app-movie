import React from 'react'
import ReactPlayer from 'react-player'
import '../Card/Watchpage.scss'

export default function Watchpage() {
  return (
    <div className='container-page'>
        <div className="page-wrap">
        <ReactPlayer url='https://youtu.be/nACIncrvZ6g'/>
        </div>
    </div>
  )
}
