import React from 'react';
import '../styles/Navbar.css';
import {
  BsBoxSeam,
  BsCalendar3Event,
  BsCalendar3Week,
  BsCalendar3,
  BsCalendarPlus,
} from 'react-icons/bs';

function Navbar({
  today,
  week,
  month,
  projects,
  handleClick,
  isOpen,
  toggleProjectModal,
  toggleTaskModal,
}) {
  return (
    <nav className={`navigation ${isOpen ? ' show-menu' : ' hide-menu'}`}>
      <ul className="menu-list">
        <li className="navbar-item" onClick={() => handleClick('all tasks')}>
          <BsBoxSeam className="navbar-image" /> All Tasks
        </li>
        <li className="navbar-item" onClick={() => handleClick('today')}>
          <BsCalendar3Event className="navbar-image" /> Today{' '}
          <span className="navbar-number">{today}</span>
        </li>
        <li className="navbar-item" onClick={() => handleClick('this week')}>
          <BsCalendar3Week className="navbar-image" /> This Week
          <span className="navbar-number">{week}</span>
        </li>
        <li className="navbar-item" onClick={() => handleClick('this month')}>
          <BsCalendar3 className="navbar-image" /> This Month
          <span className="navbar-number">{month}</span>
        </li>
        {projects}
        <li className="navbar-item" onClick={() => toggleProjectModal()}>
          <BsCalendarPlus className="navbar-image" /> Add New Project
        </li>
        <li className="navbar-item" onClick={() => toggleTaskModal()}>
          <BsCalendarPlus className="navbar-image" /> Add New Task
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
