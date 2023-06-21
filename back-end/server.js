const express = require('express')
const mongoose = require('mongoose')

const app = express()

var cors = require('cors')
app.use(cors())

// ... other server configurations ...

// MongoDB connection
const url = 'mongodb://127.0.0.1:27017/spotlessDB'

// Connect to the MongoDB server
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Get the default connection
const db = mongoose.connection

// Listen for MongoDB connection events
db.on('error', (error) => {
  console.error('Failed to connect to MongoDB:', error)
})

db.once('open', () => {
  console.log('Successfully connected to the database')

  // Define a schema for your bookings collection
  const bookingSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    email: String,
    quotePrice: Number,
    houseType: String,
    bathrooms: String,
    frequency: String,
    preferredDateTime: String,
    preferredContactMethod: {
      prefer_email: Boolean,
      prefer_phone: Boolean,
    },
  })

  // Define a model for your bookings collection
  const Booking = mongoose.model('Booking', bookingSchema)

  // Add the express.json() middleware
  app.use(express.json())

  // Handle the booking request
  app.post('/api/booking', async (req, res) => {
    try {
      const newBooking = new Booking(req.body)
      await newBooking.save()

      res.status(201).json({ message: 'Booking saved successfully' })
    } catch (error) {
      console.error('Failed to save booking:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  })

  // Retrieve all bookings
  app.get('/api/bookings', async (req, res) => {
    try {
      const bookings = await Booking.find()
      res.status(200).json(bookings)
    } catch (error) {
      console.error('Failed to fetch bookings:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  })

  // ... other routes and server logic ...

  // Start the server
  app.listen(4000, () => {
    console.log('Server is running on port 4000')
  })
})
