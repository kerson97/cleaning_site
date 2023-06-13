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
            <div className='header_left'>
              <h1>SPOTLESS.</h1>
              <h2>
                Bringing luxurious, affordable cleaning to Greater Victoria.
              </h2>
            </div>

            <div className='header_right'>
              <HouseCleaningForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
