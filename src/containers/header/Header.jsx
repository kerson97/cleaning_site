import React from 'react'
import './header.css'
import HouseCleaningForm from './Form'

const Header = () => {
  return (
    <div class='parallax-container'>
      <div class='parallax-bg' />
      <div class='parallax-content'></div>

      <div className='header'>
        <div className='header_content'>
          <div className='sides'>
            <div className='left'>
              <h1>Spotless</h1>
              <h2>Your space, cleaned your way.</h2>
            </div>

            <div className='right'>
              <h1></h1>
              <HouseCleaningForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
