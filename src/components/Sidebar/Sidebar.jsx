import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Sidebar.css'
import { FaAddressBook, FaFacebook, FaHome, FaInfoCircle, FaInstagram, FaLightbulb, FaLinkedin, FaMoon, FaSun, FaTwitter, FaWhatsapp } from 'react-icons/fa';


const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const location = useLocation()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <div className="sidebar">
      <div className="top-logo-menu">
        {/* <span className="sm-bars"><FaBars /></span> */}
        <span><Link to='/'>Matie</Link></span>
        <button onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun />: <FaMoon />}
        </button>
      </div>
      <ul className='sidebar-links'>
        <li className='sidebar-list'>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <FaHome />
            <span>Home</span>
        </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active': ''}>
            <FaInfoCircle />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active': ''}>
            <FaAddressBook />
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active': ''}>
            <FaLightbulb />
            <span>Skills</span>
          </Link>
        </li>
      </ul>
      <ul className="social-links">
        <li>
            <a href="https://web.facebook.com/profile.php?id=100073482507197"><FaFacebook /></a>
        </li>
        <li>
            <a href="https://twitter.com/matty__02"><FaTwitter /></a>
        </li>
        <li>
            <a href="https://wa.me/message/CMENL4DSR3OIH1"><FaWhatsapp /></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/bala-mathias-285b90274/"><FaLinkedin /></a>
        </li>
        <li>
            <a href="https://www.instagram.com/matie_01_/"><FaInstagram /></a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

  