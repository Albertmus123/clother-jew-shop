import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { CartDetails } from './pages/CartDetails'
import { Home } from './pages/Home'
import { ProductDetails } from './pages/ProductDetails'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart-details" element={<CartDetails />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
