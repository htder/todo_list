import React, { useState } from 'react';

import Sidebar from './Sidebar';
import Todo from './Todo';
import TaskModal from './modals/TaskModal';

function Main() {
  const [tasks, setTasks] = useState([
    {
      title: 'title test',
      description: 'description test',
      dueDate: 'due date test',
      completed: false,
      priority: 0,
      project: 'project test',
    },
  ]);
  const [projects, setProjects] = useState([
    { title: 'All Tasks' },
    { title: 'project title 1' },
    { title: 'project title 2' },
  ]);

  const taskElements = tasks.map((task, i) => {
    return (
      <Todo
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        completed={task.completed}
        priority={task.priority}
        project={task.project}
        key={i}
      />
    );
  });

  return (
    <section>
      <div>Main</div>
      <div>{taskElements}</div>
      <Sidebar />
      <TaskModal projects={projects} />
    </section>
  );
}

export default Main;
