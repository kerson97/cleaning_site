import React from 'react'
import './services.css'

const Services = () => {
  return (
    <div className='services-container'>
      <h2>We Offer:</h2>
      <div className='service-card'>
        <h3>Regular Cleaning</h3>
        <p>Our regular cleaning service includes:</p>
        <ul>
          <li>Dusting and wiping surfaces</li>
          <li>Vacuuming and mopping floors</li>
          <li>Cleaning bathrooms and kitchens</li>
          <li>Removing trash</li>
        </ul>
      </div>
      <div className='service-card'>
        <h3>Deep Cleaning</h3>
        <p>
          Our deep cleaning service includes everything in the regular cleaning
          service, plus:
        </p>
        <ul>
          <li>Thoroughly cleaning hard-to-reach areas</li>
          <li>Scrubbing and disinfecting surfaces</li>
          <li>Cleaning inside appliances</li>
          <li>Washing windows and blinds</li>
        </ul>
      </div>
      <div className='service-card'>
        <h3>Move-in/Move-out Cleaning</h3>
        <p>
          Our move-in/move-out cleaning service is designed for vacant homes and
          includes:
        </p>
        <ul>
          <li>Complete cleaning of all rooms and areas</li>
          <li>Removing dust, dirt, and debris</li>
          <li>Cleaning cabinets, closets, and storage spaces</li>
          <li>Sanitizing bathrooms and kitchens</li>
        </ul>
      </div>
      <div className='service-card'>
        <h3>Post-Renovation/Post-Construction Clean Up</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul>
          <li>Removal of construction debris</li>
          <li>Dusting and wiping surfaces</li>
          <li>Detail cleaning of fixtures and appliances</li>
          <li>Floor cleaning and polishing</li>
        </ul>
      </div>
    </div>
  )
}

export default Services
