import React from 'react'
import './form.css'

class CleaningForm extends React.Component {
  render() {
    return (
      <div className='form-container'>
        <h2>Instant Price Estimation</h2>
        <form>
          <div className='form-group'>
            <label htmlFor='house-type' className='form-label'>
              House Type:
            </label>
            <select id='house-type' name='houseType' className='form-select'>
              <option value='office'>Office</option>
              <option value='apartment'>Apartment</option>
              <option value='house'>House</option>
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='squareFeet'>Square Feet:</label>
            <select id='squareFeet' name='squareFeet' className='form-select'>
              <option value='0-1000'>0-1000 sqft</option>
              <option value='1001-2000'>1001-2000 sqft</option>
              <option value='2001-3000'>2001-3000 sqft</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='bedrooms'>Bedrooms:</label>
            <select id='bedrooms' name='bedrooms' className='form-select'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='bathrooms'>Bathrooms:</label>
            <select id='bathrooms' name='bathrooms' className='form-select'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className='form-group'>
            <button type='submit' className='form-submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CleaningForm
