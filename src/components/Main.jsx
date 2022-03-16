import React, { useEffect, useState } from 'react';
import { format, isThisWeek, isThisMonth, parseISO } from 'date-fns';
import { nanoid } from 'nanoid';

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
      priority: 'low',
      project: 'Default',
      id: nanoid(),
    },
  ]);

  const [projects, setProjects] = useState([
    { title: 'Default', id: nanoid() },
    { title: 'project title 1', id: nanoid() },
    { title: 'project title 2', id: nanoid() },
  ]);

  const [todayCount, setTodayCount] = useState(0);
  const [weekCount, setWeekCount] = useState(0);
  const [monthCount, setMonthCount] = useState(0);

  function increaseCount(task) {
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    if (task.dueDate === currentDate) {
      setTodayCount(todayCount + 1);
    }
    if (isThisWeek(parseISO(task.dueDate))) {
      setWeekCount(weekCount + 1);
    }
    if (isThisMonth(parseISO(task.dueDate))) {
      setMonthCount(monthCount + 1);
    }
  }

  useEffect(() => {
    tasks.forEach((task) => {
      increaseCount(task);
    });
  }, []);

  function handleNewTask(task) {
    setTasks((prevTasks) => [...prevTasks, task]);
    increaseCount(task);
  }

  function handleNewProject(project) {
    setProjects((prevProjects) => [...prevProjects, project]);
  }

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
        <p key={item.id}>
          {item.title} {countOccurancesProject(item.title)}
        </p>
      );
    }
  });

  const taskElements = tasks.map((task) => (
    <Todo
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      completed={task.completed}
      priority={task.priority}
      project={task.project}
      key={task.id}
    />
  ));

  return (
    <section>
      <div>Main</div>
      <div>{taskElements}</div>
      <Sidebar
        today={todayCount}
        week={weekCount}
        month={monthCount}
        projects={projectElements}
      />
      <TaskModal projects={projects} addTask={handleNewTask} />
      <ProjectModal addProject={handleNewProject} />
    </section>
  );
}

export default Main;
