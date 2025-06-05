import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Productos from './pages/Productos'
import QuienesSomos from './pages/QuienesSomos'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
