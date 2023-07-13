import React from 'react'
import './details.css'

const Details = () => {
  return (
    <div className='parallax-container'>
      <div className='parallax-bg' />
      <div className='parallax-content'></div>
      <div className='details-container font_style'>
        <div className='detail-card'>
          <h3>Mission Statement</h3>
          <p>
            At Spotless, we believe in three core principles. A clean should be
            seamless to schedule, be of exceptional quality, all well being
            affordable. To achieve these goals we believe in the power of a
            small, dedicated team who are a joy to welcome into your home. We
            aim for the Spotless experience to be something our clients look
            forward to each time they see us. Happy cleaners make happy houses,
            and happy clients! We look forward to serving you.
          </p>
        </div>

        <div className='detail-card half-card'>
          <h3>About the Founders</h3>
          <p>
            I'm Carson, founder of Spotless, and I work alongside my sister
            Julianne. Both from Kelowna, BC, we share a passion for cleanliness
            and excellent customer service. I recently graduated from the
            University of Victoria with a degree in Computer Science. With my
            technical expertise, I ensure our cleaning processes are efficient
            and innovative, using the latest technologies. Julianne graduated
            from UVic with a degree in English. Her attention to detail and
            communication skills help us understand our customers' needs for
            personalized cleaning solutions. Together, we are friendly,
            outgoing, and dedicated to providing spotless environments. Our
            mission is to deliver exceptional customer service and create a
            clean and comfortable space for our valued clients.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
