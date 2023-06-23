import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About, Header, Services, Contact, Book } from './containers'

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
