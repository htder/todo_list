import React from 'react';
import '../styles/Navbar.css';

function Navbar({ today, week, month, projects, handleClick, isOpen }) {
  return (
    <nav className={`navigation ${isOpen ? ' show-menu' : ' hide-menu'}`}>
      <ul className="menu-list">
        <li onClick={() => handleClick(event, 'all')}>All Tasks</li>
        <li onClick={() => handleClick(event, 'today')}>Today {today}</li>
        <li onClick={() => handleClick(event, 'week')}>This Week {week}</li>
        <li onClick={() => handleClick(event, 'month')}>This Month {month}</li>
        {projects}
      </ul>
    </nav>
  );
}

export default Navbar;
