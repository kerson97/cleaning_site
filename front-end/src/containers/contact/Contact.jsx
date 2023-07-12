import { React, useEffect } from 'react'
import './contact.css'
import '../../components/parallax/parallax.css'
import { initParallax } from '../../components/parallax/parallax'

const ContactPage = () => {
  useEffect(() => {
    initParallax()
  }, [])
  return (
    <div className='parallax-container'>
      <div className='parallax-bg' />
      <div className='parallax-content'></div>
      <div className='contact-container font_style'>
        <form className='contact-form'>
          <h2>We'd love to hear from you!</h2>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              placeholder='Enter your message'
              required
            ></textarea>
          </div>
          <button type='submit' className='form-submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
