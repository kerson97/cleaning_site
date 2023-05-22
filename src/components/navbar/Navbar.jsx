import React from 'react'
import logo from '../../assets/logo.png' // Path to your logo image
import './navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a href='/' className='nav-link'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='/about' className='nav-link'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='/services' className='nav-link'>
              Services
            </a>
          </li>
          <li className='nav-item'>
            <a href='/contact' className='nav-link'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
