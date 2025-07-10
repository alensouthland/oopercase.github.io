import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Typefaces from './pages/Typefaces.jsx'
import UX from './pages/UX.jsx'
import Contact from './pages/Contact.jsx'

import './styles/nav.css'

function App() {
  return (
    <Router>
      {/* ✅ This nav appears on every page */}
      <nav className="navbar">
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/typefaces" style={{ marginRight: '1rem' }}>Typefaces</Link>
        <Link to="/ux" style={{ marginRight: '1rem' }}>UX</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Page routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/typefaces" element={<Typefaces />} />
        <Route path="/ux" element={<UX />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
