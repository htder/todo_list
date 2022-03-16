import React from 'react';

function Sidebar({ today, week, month, projects }) {
  return (
    <aside>
      <p>All Tasks</p>
      <p>Today {today}</p>
      <p>This Week {week}</p>
      <p>This Month {month}</p>
      {projects}
    </aside>
  );
}

export default Sidebar;
