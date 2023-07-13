import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  return (
    <section class='testimonials-section'>
      <div class='container'>
        <h2>Testimonials</h2>
        <div class='testimonial-row'>
          <div class='testimonial'>
            <div class='testimonial-content'>
              <p>
                Carson did a great job and our bathrooms and floors are
                sparkling!
              </p>
              <p class='testimonial-author'>- Britta Hollrah</p>
            </div>
          </div>
          <div class='testimonial'>
            <div class='testimonial-content'>
              <p>
                Service was outstanding. Brianna and Carson cleaned our condo
                thoroughly before our move in, and they were very efficient and
                pleasant. Thank you!
              </p>
              <p class='testimonial-author'>- Laurel</p>
            </div>
          </div>
          <div class='testimonial'>
            <div class='testimonial-content'>
              <p>Carson at Oak Bay Clean did an amazing job..very impressed!</p>
              <p class='testimonial-author'>- Stephanie Pink</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
