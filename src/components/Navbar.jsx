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
        <Link to="/typefaces">Fonts</Link>
        <Link to="/ux">UX Design</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="nav-right">
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
