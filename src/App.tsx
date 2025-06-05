import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar'
import Productos from './pages/Productos'
import AboutUs from './pages/QuienesSomos'


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/quienes-somos" element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
