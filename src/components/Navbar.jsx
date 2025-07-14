// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Logo from '../assets/OOPR_Logo.png'; // ← Import the logo

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src={Logo} alt="OOPER CASE TYPE" className="nav-logo" />
        </Link>
      </div>

      <div className="nav-center">
        <Link to="/typefaces">Typefaces</Link>
        <Link to="/ux">UX</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
