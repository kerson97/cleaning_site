import React, { useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

const Navbar = () => {
  const [activeOption, setActiveOption] = useState('')
  const navigate = useNavigate()

  const handleOptionClick = (option) => {
    setActiveOption(option)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getNavOptionClass = (option) => {
    return option === activeOption ? 'nav-link active' : 'nav-link'
  }

  const handleAboutClick = () => {
    handleOptionClick('/about')
  }

  return (
    <nav className='navbar font_style'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <img src={Logo} alt='My SVG' />
        </li>

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
            to='/details'
            className={getNavOptionClass('/details')}
            onClick={() => handleOptionClick('/details')}
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
            <b>BOOK SPOTLESS</b>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
