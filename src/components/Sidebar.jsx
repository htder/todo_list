import React from 'react';
import { format, isThisWeek, isThisMonth, parseISO } from 'date-fns';

function Sidebar({ tasks, projects }) {

  function countOccurancesProject(projectName) {
    let count = 0;
    tasks.forEach((item) => {
      if (item.project === projectName) {
        count += 1;
      }
    });
    return count;
  }

  const projectElements = projects.map((item) => {
    if (item.title !== 'Default') {
      return (
        <p>
          {item.title} {countOccurancesProject(item.title)}
        </p>
      );
    }
  });

  function countOccurancesToday() {
    let count = 0;
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    tasks.forEach((task) => {
      if (task.dueDate === currentDate) count += 1;
    });
    return count;
  }

  function countOccurancesWeek() {
    let count = 0;
    tasks.forEach((task) => {
      if (isThisWeek(parseISO(task.dueDate))) {
        count += 1;
      }
    });
    return count;
  }

  function countOccurancesMonth() {
    let count = 0;
    tasks.forEach((task) => {
      if (isThisMonth(parseISO(task.dueDate))) {
        count += 1;
      }
    });
    return count;
  }

  return (
    <aside>
      <p>All Tasks</p>
      <p>Today {countOccurancesToday()}</p>
      <p>This Week {countOccurancesWeek()}</p>
      <p>This Month {countOccurancesMonth()}</p>
      {projectElements}
    </aside>
  );
}

export default Sidebar;
