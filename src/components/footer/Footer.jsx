import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            massa vitae ligula pretium pharetra.
          </p>
        </div>

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
          <p>Victoria, BC, Canada</p>
          <p>Phone: (250)-878-8599</p>
          <p>Email: book.spotless@gmail.com</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2023 Spotless Cleaning. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
