import React from 'react'
import './training.css'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'
import { Link } from 'react-router-dom'

const Training = () => {
  return (
    <div className='training'>
        <div className="left">
            <h1>Training</h1>
            <p>Confined space training helps workers understand what constitutes a confined space as well as increases awareness of the hazards that one can expect to find in a confined space.</p>
            <Link to={'/contact'}><button className='btn'>Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="image-stack top">
                    <img src={Moon} alt="Moon"  className='img'/>
                </div>
                <div className="image-stack bottom">
                    <img src={Pod} alt="Pod"  className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training