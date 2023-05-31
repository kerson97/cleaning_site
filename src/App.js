import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './index.css'

import { About, Header, Services, Contact } from './containers'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default App
