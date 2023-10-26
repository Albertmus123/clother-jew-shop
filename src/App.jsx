import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { CartDetails } from './pages/CartDetails'
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart-details" element={<CartDetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
