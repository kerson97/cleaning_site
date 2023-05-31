import React from 'react'
import './about.css'
import sink from '../../assets/sink.jpg'

const About = () => {
  return (
    <div className='about_content' id='about'>
      <div className='parallax-content'></div>
      <div className='parallax-container'>
        <div className='about_sides'>
          <div className='about_left'>
            <img src={sink} alt='sink' />
          </div>
          <div className='about_right'>
            <h1>Why spotless?</h1>
            <ul className='list'>
              <li>Family owned and operated</li>
              <li>Experienced, trusted cleaners</li>
              <li>Cheap as fuck</li>
              <li>Book cleans easily with our web-app</li>
              <li>Cleaning updates to your phone or email</li>
              <button>Book Now!</button>
            </ul>
          </div>
        </div>

        <div className='squares'>
          <div className='square'>
            <div className='content'>Square Content</div>
          </div>

          <div className='square'>
            <div className='content'>Square Content</div>
          </div>
          <div className='square'>
            <div className='content'>Square Content</div>
          </div>
          <div className='square'>
            <div className='content'>Square Content</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
