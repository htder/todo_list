import React from 'react';

function Sidebar({ today, week, month, projects, handleClick }) {
  return (
    <aside>
      <p>All Tasks</p>
      <p onClick={(event) => handleClick(event, 'today')}>Today {today}</p>
      <p onClick={(event) => handleClick(event, 'week')}>This Week {week}</p>
      <p onClick={(event) => handleClick(event, 'month')}>This Month {month}</p>
      {projects}
    </aside>
  );
}

export default Sidebar;
