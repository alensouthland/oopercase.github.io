// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Typefaces from './pages/Typefaces.jsx';
import UX from './pages/UX.jsx';
import Contact from './pages/Contact.jsx';

import Navbar from './components/Navbar.jsx';
import './styles/nav.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/typefaces" element={<Typefaces />} />
        <Route path="/ux" element={<UX />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
