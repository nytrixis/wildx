import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const dropdownRef = useRef(null);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="logo-text">WildX</span>
      </div>
      <ul className="nav-links">
        {['Home', 'About', 'Lorem', 'Lorem', 'Lorem', 'Contact', 'Blog'].map((item) => (
          <li key={item}>
            <a 
              href="#" 
              className={activeTab === item ? 'active' : ''}
              onClick={() => handleTabClick(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="user-icon" onClick={toggleDropdown} ref={dropdownRef}>
        <FontAwesomeIcon icon={faUser} />
        {dropdownOpen && (
          <div className="dropdown">
            <a href="#">Login</a>
            <hr />
            <a href="#">Sign Up</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
