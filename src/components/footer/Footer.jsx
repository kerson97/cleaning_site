import React from 'react'
import './footer.css'

import {
  faEnvelope,
  faPhone,
  faLocationPin,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h3>Services</h3>
          <ul>
            <li>Residential Cleaning</li>
            <li>Commercial Cleaning</li>
            <li>Post Renovation Cleanup</li>
            <li>Post Construction Cleanup</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h3>Contact Us</h3>
          <p>
            <FontAwesomeIcon
              icon={faLocationPin}
              style={{ color: '#ffffff' }}
            />
            <span> : Victoria, BC, Canada</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} style={{ color: '#ffffff' }} />
            <span> : (250)-878-8599</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ffffff' }} />
            <span> : book.spotless@gmail.com</span>
          </p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2023 Spotless Cleaning. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
