import React from 'react'
import './form.css'

class CleaningForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotePrice: null,
      houseType: '100',
      bathrooms: '1',
      frequency: 'weekly',
    }
  }

  componentDidMount() {
    this.calculateQuote()
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value }, this.calculateQuote)
  }

  calculateQuote = () => {
    const { houseType, bathrooms, frequency } = this.state
    // Perform your quote calculation logic based on the selected options
    // Replace the following lines with your actual quote calculation

    const houseFees = {
      100: 100,
      116: 116,
      132: 132,
      164: 164,
      172: 172,
      200: 200,
      238: 238,
      278: 278,
      318: 318,
      358: 358,
      400: 400,
      438: 438,
    }
    const houseFee = houseFees[houseType] || 0

    const frequencyFees = {
      weekly: 5,
      biweekly: 10,
      monthly: 20,
      oneTime: 30,
    }
    const frequencyFee = frequencyFees[frequency] || 0

    const bathroomPrice = 12 * parseInt(bathrooms) // $10 per bathroom
    const quotePrice = bathroomPrice + houseFee + frequencyFee
    this.setState({ quotePrice: quotePrice.toFixed(2) })
  }

  render() {
    const { quotePrice } = this.state

    return (
      <div className='form-container'>
        <h2>Instant Quote</h2>
        <form id='quote-form'>
          <div className='form-group'>
            <label htmlFor='houseType'>House Type:</label>
            <select
              id='houseType'
              name='houseType'
              className='form-select'
              onChange={this.handleInputChange}
            >
              <option value='100'>Studio or 1 bedroom</option>
              <option value='116'>2 bedroom</option>
              <option value='132'>3 bedroom Apartment or Townhouse</option>
              <option value='164'>
                3/4 bedroom house (or 1700 to 1999 sqft)
              </option>
              <option value='172'>Between 2000 & 2499 sqft</option>
              <option value='200'>Between 2500 & 2999 sqft</option>
              <option value='238'>Between 3000 & 3499 sqft</option>
              <option value='278'>Between 3500 & 3999 sqft</option>
              <option value='318'>Between 4000 & 4499 sqft</option>
              <option value='358'>Between 4500 & 4999 sqft</option>
              <option value='400'>Between 5000 & 5499 sqft</option>
              <option value='438'>Between 5500 & 5999 sqft</option>
              <option value='hourly'>Hourly Service</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='bathrooms'>Bathrooms:</label>
            <select
              id='bathrooms'
              name='bathrooms'
              className='form-select'
              onChange={this.handleInputChange}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='frequency' className='form-label'>
              Frequency:
            </label>
            <select
              id='frequency'
              name='frequency'
              className='form-select'
              onChange={this.handleInputChange}
            >
              <option value='weekly'>Weekly</option>
              <option value='biweekly'>Bi-Weekly</option>
              <option value='monthly'>Monthly</option>
              <option value='oneTime'>One Time Service</option>
            </select>
          </div>

          <div className='form-group'>
            <button type='submit' className='form-submit'>
              Book Spotless {quotePrice && `($${quotePrice} Clean)`}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CleaningForm
