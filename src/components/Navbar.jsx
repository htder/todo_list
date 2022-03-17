import React from 'react';
import '../styles/Navbar.css';
import '../styles/Header.css';
// import { MdClose } from 'react-icons/md';
// import { FiMenu } from 'react-icons/fi';

function Navbar({
  today,
  week,
  month,
  projects,
  handleClick,
  isOpen,
  // toggle,
}) {
  return (
    <nav className="navbar">
      {/* <button className="menu-button" onClick={toggle}> */}
      {/*   {isOpen ? <MdClose /> : <FiMenu />} */}
      {/* </button> */}
      <div className={`navigation ${isOpen ? ' show-menu' : ''}`}>
        <ul className="menu-list">
          <li onClick={() => handleClick(event, 'all')}>All Tasks</li>
          <li onClick={() => handleClick(event, 'today')}>Today {today}</li>
          <li onClick={() => handleClick(event, 'week')}>This Week {week}</li>
          <li onClick={() => handleClick(event, 'month')}>
            This Month {month}
          </li>
          {projects}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
