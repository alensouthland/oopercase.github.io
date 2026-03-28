// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import Logo from '../assets/OOPR_Logo.png';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" onClick={close}>
            <img src={Logo} alt="OOPER CASE TYPE" className="nav-logo" /> &nbsp;&nbsp;
            <span className="home__mark">Ooper Case Type</span>
          </Link>
        </div>

        {/* Desktop center links */}
        <div className="nav-center home__mark">
          <Link to="/">Fonts</Link>
          <Link to="/writings">Writings</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="nav-center">
          {/* Theme toggle — always visible */}
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
            <span className="slider round"></span>
          </label>

          {/* Hamburger — mobile only */}
          <button
            className={`nav-burger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer${menuOpen ? ' is-open' : ''}`}>
        <Link to="/" onClick={close}>Fonts</Link>
        <Link to="/writings" onClick={close}>Writings</Link>
        <Link to="/about" onClick={close}>About</Link>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="nav-overlay" onClick={close} />
      )}
    </>
  );
};

export default Navbar;