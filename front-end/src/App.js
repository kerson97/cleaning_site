import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About, Header, Services, Contact, Book } from './containers'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`App ${isLoaded ? 'fade-in' : 'fade-in'}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/book' element={<Book />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

function HomePage() {
  return (
    <div>
      <Header />
      <About />
    </div>
  )
}

export default App
