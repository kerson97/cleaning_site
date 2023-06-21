import React, { useEffect, useState } from 'react'
import './book.css'
import BookCleaningForm from './BookForm'

const Book = () => {
  const [quotePrice, setQuotePrice] = useState(null)

  const calculateQuote = () => {
    // Replace this logic with your actual quote calculation
    const quote = 100 // Sample quote calculation
    setQuotePrice(quote.toFixed(2))
  }

  useEffect(() => {
    // Add event listener for form submission
    const handleSubmit = (event) => {
      event.preventDefault() // Prevent form submission
      calculateQuote() // Call the function to calculate and update the quote
      // Perform other actions or submit the form as needed
    }

    const quoteForm = document.getElementsByClassName('book-form-container')[0]
    quoteForm.addEventListener('submit', handleSubmit)

    return () => {
      // Clean up the event listener when the component unmounts
      quoteForm.removeEventListener('submit', handleSubmit)
    }
  }, [])

  return (
    <div className='book_content'>
      <BookCleaningForm />
    </div>
  )
}

export default Book
