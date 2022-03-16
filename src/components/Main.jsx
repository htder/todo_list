import React, { useState } from 'react';

import Sidebar from './Sidebar';
import Todo from './Todo';
import TaskModal from './modals/TaskModal';
import ProjectModal from './modals/ProjectModal';

function Main() {
  const [tasks, setTasks] = useState([
    {
      title: 'title test',
      description: 'description test',
      dueDate: '2022-03-16',
      completed: false,
      priority: 0,
      project: 'Default',
    },
  ]);

  const [projects, setProjects] = useState([
    { title: 'Default' },
    { title: 'project title 1' },
    { title: 'project title 2' },
  ]);

  const taskElements = tasks.map((task, i) => (
    <Todo
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      completed={task.completed}
      priority={task.priority}
      project={task.project}
      key={i}
    />
  ));

  function handleNewTask(task) {
    setTasks((prevTasks) => [...prevTasks, task]);
  }

  function handleNewProject(project) {
    setProjects((prevProjects) => [...prevProjects, project]);
  }

  return (
    <section>
      <div>Main</div>
      <div>{taskElements}</div>
      <Sidebar tasks={tasks} projects={projects} />
      <TaskModal projects={projects} addTask={handleNewTask} />
      <ProjectModal addProject={handleNewProject} />
    </section>
  );
}

export default Main;
