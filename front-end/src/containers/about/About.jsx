import React from 'react'
import './about.css'
import tub from '../../assets/tub.jpg'
import cleaner from '../../assets/cleaner.jpg'
import {
  faCheck,
  faDesktop,
  faBell,
  faHandSparkles,
  faCouch,
  faCommentDollar,
  faPiggyBank,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const About = () => {
  const generateListItem = (text) => {
    return (
      <li>
        <FontAwesomeIcon
          icon={faCheck}
          style={{ color: '#ffffff', marginRight: '15px', marginLeft: '15px' }}
        />
        {text}
      </li>
    )
  }

  return (
    <div className='about_content' id='about'>
      <div className='about_sides'>
        <div className='about_left'>
          <img src={tub} alt='tub' />
        </div>
        <div className='about_right'>
          <h1>Why choose Spotless?</h1>
          <ul className='list'>
            {generateListItem('Family owned and operated')}
            {generateListItem('Experienced, reliable cleaners')}
            {generateListItem('Swift booking process')}
            {generateListItem('Competitive pricing')}
            {generateListItem('Customizeable packages')}

            <Link to='/book' style={{ textDecoration: 'none' }}>
              <button>Book Now!</button>
            </Link>
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
            <br />
            Book Online
          </div>
        </div>

        <div className='square'>
          <div className='content'>
            <FontAwesomeIcon
              icon={faBell}
              size='2xl'
              style={{ color: '#ffffff' }}
            />
            <br />
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
            <br />
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
            <br />
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
            <br />
            Leave Feedback
          </div>
        </div>

        <div className='square'>
          <div className='content'>
            <FontAwesomeIcon
              icon={faPiggyBank}
              size='2xl'
              style={{ color: '#ffffff' }}
            />
            <br />
            Discounts!
          </div>
        </div>
      </div>
      <div className='about_sides'>
        <div className='about_left'>
          <img src={cleaner} alt='cleaner' />
        </div>
        <div className='about_right'>
          <h1>Our cleaners are:</h1>
          <ul className='list'>
            {generateListItem('Background and reference checked')}
            {generateListItem('Industry professionals')}
            {generateListItem('Passionate about cleanliness')}
            {generateListItem('Fun and outgoing!')}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
