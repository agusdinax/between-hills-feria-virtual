import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/FNE4ejLzpgH6hF2v0mXcb2'

const Navbar: React.FC = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* Envuelvo la imagen del logo en Link */}
        <Link to="/" onClick={() => setMenuOpen(false)} className="nav-logo-link">
          <img src="src/assets/logo.png" alt="Logo" className="nav-logo-img" />
        </Link>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
          <Link to="/">Productos</Link>
        </li>
        <li className={location.pathname === '/quienes-somos' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
          <Link to="/quienes-somos">Quiénes Somos</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            Grupo WhatsApp
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
