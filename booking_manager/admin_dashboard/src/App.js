import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Dashboard, Bookings } from './containers'

function App() {
  return (
    <div className='App'>
      <Router>
        <Dashboard />
        <Bookings />
      </Router>
    </div>
  )
}

function HomePage() {
  return (
    <div>
      <Dashboard />
    </div>
  )
}

export default App
