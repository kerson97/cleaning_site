import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About, Header, Services, Contact, Book, Details } from './containers'
import Testimonials from './containers/testimonials/Testimonials'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/book' element={<Book />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/details' element={<Details />} />
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
      <Testimonials />
    </div>
  )
}

export default App
