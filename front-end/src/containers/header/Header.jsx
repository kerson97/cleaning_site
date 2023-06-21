import React, { useEffect } from 'react'
import { initParallax } from './parallax.js'
import { calculateQuote } from './quoteCalculator.js'
import './header.css'
import HouseCleaningForm from './Form'

const Header = () => {
  useEffect(() => {
    initParallax()
    // Add event listener for form submission
    var quoteForm = document.getElementsByClassName('form-container')[0]
    quoteForm.addEventListener('submit', function (event) {
      event.preventDefault() // Prevent form submission
      calculateQuote() // Call the function to calculate and update the quote
      // Perform other actions or submit the form as needed
    })
  }, [])

  return (
    <div className='parallax-container'>
      <div className='parallax-bg' />
      <div className='parallax-content'></div>
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
