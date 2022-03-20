import React from 'react';
import '../styles/Navbar.css';

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
        <li onClick={() => handleClick('all tasks')}>All Tasks</li>
        <li onClick={() => handleClick('today')}>Today {today}</li>
        <li onClick={() => handleClick('this week')}>This Week {week}</li>
        <li onClick={() => handleClick('this month')}>This Month {month}</li>
        {projects}
        <li onClick={() => toggleProjectModal()}>Add New Project</li>
        <li onClick={() => toggleTaskModal()}>Add New Task</li>
      </ul>
    </nav>
  );
}

export default Navbar;
