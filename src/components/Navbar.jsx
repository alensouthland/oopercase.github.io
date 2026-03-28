// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import Logo from '../assets/OOPR_Logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            <img src={Logo} alt="OOPER CASE TYPE" className="nav-logo" />&nbsp;&nbsp;
            <span className="home__mark">Ooper Case Type</span>
          </Link>
        </div>

        <div className="nav-center home__mark">
          <Link to="/">Fonts</Link>
          <Link to="/writings">Writings</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="nav-right">
          <ThemeToggle />

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

      <div className={`nav-drawer${menuOpen ? ' is-open' : ''}`}>
        <Link to="/" onClick={close}>Fonts</Link>
        <Link to="/writings" onClick={close}>Writings</Link>
        <Link to="/about" onClick={close}>About</Link>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={close} />}
    </>
  );
};

export default Navbar;