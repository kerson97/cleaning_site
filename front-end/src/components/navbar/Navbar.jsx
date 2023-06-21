import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

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
            <a href='#about' className='nav-link'>
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

          <li className='nav-item'>
            <a href='/book' className='nav-link'>
              BOOK <br />
              SPOTLESS
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
