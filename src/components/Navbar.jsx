import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = ({ onAuthAction }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [isConnected, setIsConnected] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const handleAuthAction = (action) => {
    setDropdownOpen(false);
    onAuthAction(action);
  };

  const connectToMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      window.open('https://metamask.io/download.html', '_blank');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const currentPath = location.pathname.slice(1) || 'Home';
    setActiveTab(currentPath.charAt(0).toUpperCase() + currentPath.slice(1));
  }, [location]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navItems = ['Home', 'Monitor', 'Encyclopedia', 'Game', 'Report', 'Blog', 'Contact'];

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">WildX</span>
      </div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={activeTab === item ? 'active' : ''}
            >
              {item}
            </Link>
            <Link to="/monitor" className={activeTab === 'Monitor' ? 'active' : ''} onClick={() => handleTabClick('Monitor')}>
</Link>
          </li>
        ))}
      </ul>
      <button
        className="metamask-button"
        onClick={connectToMetaMask}
      >
        {isConnected ? 'Connected' : 'Connect Core'}
      </button>
      <div className="user-icon" onClick={toggleDropdown} ref={dropdownRef}>
        <FontAwesomeIcon icon={faUser} />
        {dropdownOpen && (
          <div className="dropdown">
            <a href="#" onClick={() => handleAuthAction('login')}>Login</a>
            <hr />
            <a href="#" onClick={() => handleAuthAction('signup')}>Sign Up</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
