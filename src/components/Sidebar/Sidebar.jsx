import { Link, useHref } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './Sidebar.css'
import { FaAddressBook, FaFacebook, FaHome, FaInfoCircle, FaInstagram, FaLinkedin, FaMoon, FaSun, FaTwitter, FaWhatsapp } from 'react-icons/fa';



const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isActive, setIsActive] = useState(false);


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

  function markActive(e) {
    setIsActive(prev => !prev)
    if (isActive) {
        e.target.classList.add('active')
    } else {
        e.target.classList.remove('active')
    }
}

  return (
    <div className="sidebar">
      <div className="top-logo-menu">
        <span><Link to='/'>Matie</Link></span>
        <button onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun />: <FaMoon />}
        </button>
      </div>
      <ul className='sidebar-links'>
        <li className='sidebar-list'>
          <Link to="/" onClick={markActive}>
            <FaHome />
            <span>Home</span>
        </Link>
        </li>
        <li>
          <Link to="/about" onClick={markActive}>
            <FaInfoCircle />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={markActive}>
            <FaAddressBook />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <ul className="social-links">
        <li>
            <a href="#"><FaFacebook /></a>
        </li>
        <li>
            <a href="#"><FaTwitter /></a>
        </li>
        <li>
            <a href="#"><FaWhatsapp /></a>
        </li>
        <li>
            <a href="#"><FaLinkedin /></a>
        </li>
        <li>
            <a href="#"><FaInstagram /></a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

  