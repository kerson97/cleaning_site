import React from 'react'
import './about.css'
import sink from '../../assets/sink.jpg'
import cleaner from '../../assets/cleaner.jpg'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const generateListItem = (text) => {
    return (
      <li>
        <FontAwesomeIcon
          icon={faCheck}
          style={{ color: '#ffffff', marginRight: '15px' }}
        />
        {text}
      </li>
    )
  }

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
              {generateListItem('Family owned and operated')}
              {generateListItem('Experienced, trusted cleaners')}
              {generateListItem('Competitive pricing')}
              {generateListItem('Book cleans easily with our web-app')}
              {generateListItem('Cleaning updates to your phone or email')}
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
        <div className='bottom_squares'>
          <div className='square'>
            <img src={cleaner} alt='cleaner' />
          </div>
          <div className='square'>
            <div className='content'>
              <h1>Our cleaners are:</h1>
              <ul className='list'>
                {generateListItem('Background checked')}
                {generateListItem('Professionals in the field')}
                {generateListItem('Passionate about cleanliness!')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
