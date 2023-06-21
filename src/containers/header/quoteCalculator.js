// quoteCalculator.js

export function calculateQuote() {
  // Get the selected house type, square footage, and number of bedrooms
  var houseType = document.getElementById('house-type').value
  var squareFeet = parseInt(document.getElementById('square-feet').value)
  var bedrooms = parseInt(document.getElementById('bedrooms').value)

  // Perform your quote calculation logic based on the inputs
  // Replace the following line with your actual quote calculation
  var basePrice = 0.1 * squareFeet // Dummy base price for square footage
  var bedroomPrice = 20 * bedrooms // $20 per bedroom
  var quotePrice = basePrice + bedroomPrice

  // Update the submit button text with the quote price
  var submitButton = document.getElementById('submit-button')
  submitButton.textContent = 'Submit (Quote: $' + quotePrice.toFixed(2) + ')'
}
