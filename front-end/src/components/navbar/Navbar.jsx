import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [activeOption, setActiveOption] = useState('')

  const handleOptionClick = (option) => {
    setActiveOption(option)
  }

  const getNavOptionClass = (option) => {
    return option === activeOption ? 'nav-link active' : 'nav-link'
  }

  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link
            to='/'
            className={getNavOptionClass('/')}
            onClick={() => handleOptionClick('/')}
          >
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/about'
            className={getNavOptionClass('/about')}
            onClick={() => handleOptionClick('/about')}
          >
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/services'
            className={getNavOptionClass('/services')}
            onClick={() => handleOptionClick('/services')}
          >
            Services
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/contact'
            className={getNavOptionClass('/contact')}
            onClick={() => handleOptionClick('/contact')}
          >
            Contact
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/book'
            className={getNavOptionClass('/book')}
            onClick={() => handleOptionClick('/book')}
          >
            BOOK <br />
            SPOTLESS
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
