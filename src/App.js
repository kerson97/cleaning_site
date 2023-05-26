import './App.css'
import Navbar from './components/navbar/Navbar'
import './index.css'

import { About, Header, Services, Contact } from './containers'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
    </div>
  )
}

export default App
