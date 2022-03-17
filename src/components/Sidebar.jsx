import React from 'react';
import '../styles/Navbar.css';

function Sidebar({
  today,
  week,
  month,
  projects,
  handleClick,
  isOpen,
  toggle,
}) {
  return (
    <nav className="navbar">
      <button onClick={toggle}>{isOpen ? 'Close' : 'Open'}</button>
      <ul className={`menu-nav ${isOpen ? ' show-menu' : ''}`}>
        <li onClick={() => handleClick(event, 'all')}>All Tasks</li>
        <li onClick={() => handleClick(event, 'today')}>Today {today}</li>
        <li onClick={() => handleClick(event, 'week')}>This Week {week}</li>
        <li onClick={() => handleClick(event, 'month')}>This Month {month}</li>
        {projects}
      </ul>
    </nav>
  );
}

export default Sidebar;
