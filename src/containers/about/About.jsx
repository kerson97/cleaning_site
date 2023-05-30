import React from 'react'
import './about.css'
import sink from '../../assets/sink.jpg'

const About = () => {
  return (
    <div className='about_content' id='about'>
      <div class='parallax-content'></div>
      <div class='parallax-container'>
        <div className='about_sides'>
          '
          <div className='about_left'>
            <img src={sink} alt='sink' />
          </div>
          <div className='about_right'>
            <h1>Our services</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
