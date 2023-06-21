import React from 'react'
import './book-form.css'
import axios from 'axios'

class BookCleaningForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phoneNumber: '',
      email: '',
      quotePrice: null,
      houseType: '100',
      bathrooms: '1',
      frequency: 'weekly',
      preferredDateTime: '',
      preferredContactMethod: {
        prefer_email: false,
        prefer_phone: false,
      },
    }
  }

  componentDidMount() {
    this.calculateQuote()
  }

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target
    if (type === 'checkbox') {
      this.setState((prevState) => ({
        preferredContactMethod: {
          ...prevState.preferredContactMethod,
          [name]: checked,
        },
      }))
    } else {
      this.setState({ [name]: value }, () => {
        if (
          name === 'houseType' ||
          name === 'bathrooms' ||
          name === 'frequency'
        ) {
          this.calculateQuote()
        }
      })
    }
  }

  calculateQuote = () => {
    const { houseType, bathrooms, frequency } = this.state
    // Perform your quote calculation logic based on the selected options
    // Replace the following lines with your actual quote calculation

    if (houseType && bathrooms && frequency) {
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
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const formData = {
      ...this.state,
    }

    try {
      const response = await axios.post(
        'http://localhost:4000/api/booking',
        formData
      )
      console.log(response.data) // Optional: handle the response from the backend

      // Reset the form fields after successful submission
      this.setState({
        quotePrice: null,
        name: '',
        phoneNumber: '',
        email: '',
        preferredDateTime: '',
        preferredContactMethod: {
          prefer_email: false,
          prefer_phone: false,
        },
      })

      // Display a pop-up message *LATER MAKE THIS LEAD TO A PAYMENT PAGE, OR A THANKS FOR BOOKING PAGE*
      window.alert(
        'Booking request has been received! You will be contacted shortly for confirmation. Thanks!'
      )
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {
      quotePrice,
      name,
      phoneNumber,
      email,
      preferredDateTime,
      preferredContactMethod,
    } = this.state

    return (
      <div className='book-form-container'>
        <h2>Booking Information</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='book-form-content'>
            <div className='book-form-left'>
              <div className='book-form-group'>
                <div className='book-label-container-names'>
                  <label htmlFor='name'>Full Name:</label>
                </div>
                <div className='book-input-container'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='book-form-input'
                    value={name}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className='book-form-group'>
                <div className='book-label-container'>
                  <label htmlFor='phoneNumber'>Phone Number:</label>
                </div>
                <div className='book-input-container'>
                  <input
                    type='text'
                    id='phoneNumber'
                    name='phoneNumber'
                    className='book-form-input'
                    value={phoneNumber}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className='book-form-group'>
                <div className='book-label-container'>
                  <label htmlFor='email'>Email:</label>
                </div>
                <div className='book-input-container'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='book-form-input'
                    value={email}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className='book-form-group'>
                <div className='book-label-container'>
                  <label>Preferred Contact Method:</label>
                </div>
                <div className='book-input-container'>
                  <div>
                    <input
                      type='checkbox'
                      id='email'
                      name='prefer_email'
                      checked={preferredContactMethod.email}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor='email'>Email</label>
                  </div>
                  <div>
                    <input
                      type='checkbox'
                      id='phone'
                      name='prefer_phone'
                      checked={preferredContactMethod.phone}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor='phone'>Phone</label>
                  </div>
                </div>
              </div>
            </div>

            <div className='book-form-right'>
              <div className='book-form-group'>
                <div className='book-label-container'>
                  <label htmlFor='houseType'>House Type:</label>
                </div>
                <div className='book-input-container'>
                  <select
                    id='houseType'
                    name='houseType'
                    className='form-select'
                    onChange={this.handleInputChange}
                  >
                    <option value='100'>Studio or 1 bedroom</option>
                    <option value='116'>2 bedroom</option>
                    <option value='132'>
                      3 bedroom Apartment or Townhouse
                    </option>
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
              </div>

              <div className='book-form-group'>
                <div className='book-label-container'>
                  <label htmlFor='bathrooms'>Bathrooms:</label>
                </div>
                <div className='book-input-container'>
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
              </div>

              <div className='book-form-group'>
                <div className='book-label-container'>
                  <label htmlFor='frequency'>Frequency:</label>
                </div>
                <div className='book-input-container'>
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
              </div>

              <div className='book-form-group'>
                <div className='book-label-container'>
                  <label htmlFor='preferredDateTime'>
                    Preferred Date and Time:
                  </label>
                </div>
                <div className='book-input-container'>
                  <input
                    type='datetime-local'
                    id='preferredDateTime'
                    name='preferredDateTime'
                    className='book-form-input'
                    value={preferredDateTime}
                    onChange={this.handleInputChange}
                    step='7200'
                    list='timeOptions'
                  />
                </div>
                <datalist id='timeOptions'>{/* Options */}</datalist>
              </div>
            </div>
          </div>

          <div className='book-form-group'>
            <button type='submit' className='form-submit'>
              Book Spotless {quotePrice && `($${quotePrice} Clean)`}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default BookCleaningForm
