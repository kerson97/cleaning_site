import React from 'react'
import './contact.css'

const ContactPage = () => {
  return (
    <div className='contact-container'>
      <h2>We'd love to hear from you!</h2>
      <form className='contact-form'>
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
  )
}

export default ContactPage
