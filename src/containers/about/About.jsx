import React from 'react'
import './about.css'
import sink from '../../assets/sink.jpg'
import cleaner from '../../assets/cleaner.jpg'
import {
  faCheck,
  faDesktop,
  faBell,
  faHandSparkles,
  faCouch,
  faCommentDollar,
} from '@fortawesome/free-solid-svg-icons'
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
          <div className='content'>
            <FontAwesomeIcon
              icon={faDesktop}
              size='2xl'
              style={{ color: '#ffffff' }}
            />
            Order Online
          </div>
        </div>

        <div className='square'>
          <div className='content'>
            <FontAwesomeIcon
              icon={faBell}
              size='2xl'
              style={{ color: '#ffffff' }}
            />
            Receive Updates
          </div>
        </div>
        <div className='square'>
          <div className='content'>
            <FontAwesomeIcon
              icon={faHandSparkles}
              size='2xl'
              style={{ color: '#ffffff' }}
            />
            We Clean
          </div>
        </div>
        <div className='square'>
          <div className='content'>
            <FontAwesomeIcon
              icon={faCouch}
              size='2xl'
              style={{ color: '#ffffff' }}
            />
            You Relax
          </div>
        </div>
        <div className='square'>
          <div className='content'>
            <FontAwesomeIcon
              icon={faCommentDollar}
              size='2xl'
              style={{ color: '#ffffff' }}
            />
            Leave Feedback & Earn Points!
          </div>
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
              {generateListItem('Industry Professionals')}
              {generateListItem('Passionate about cleanliness')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
