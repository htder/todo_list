import React, { useEffect, useState } from 'react';
import { format, isThisWeek, isThisMonth, parseISO } from 'date-fns';
import { nanoid } from 'nanoid';
import { BsClipboardData } from 'react-icons/bs';

import '../styles/Main.css';

import Navbar from './Navbar';
import TaskModal from './modals/TaskModal';
import ProjectModal from './modals/ProjectModal';
import TaskWindow from './TaskWindow';
import Header from './Header';

function Main() {
  const [tasks, setTasks] = useState([
    {
      title:
        'title title title title title title title title title title title title',
      description:
        'description description description description description description description',
      dueDate: '2022-03-17',
      completed: false,
      priority: 'low',
      project: 'project title 2',
      id: nanoid(),
    },
  ]);

  const [projects, setProjects] = useState([
    { title: 'Default', id: nanoid() },
    {
      title: 'project title 1',
      id: nanoid(),
    },
    { title: 'project title 2', id: nanoid() },
  ]);

  // Does not show all tasks on inital page
  // const [currentTasks, setCurrentTasks] = useState([]);
  // const [currentView, setCurrentView] = useState('');

  const [currentTasks, setCurrentTasks] = useState(tasks);
  const [currentView, setCurrentView] = useState('all tasks');

  const [todayCount, setTodayCount] = useState(0);
  const [weekCount, setWeekCount] = useState(0);
  const [monthCount, setMonthCount] = useState(0);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showTasks, setShowTasks] = useState(true);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  useEffect(() => {
    updateCounts();
  }, [tasks]);

  useEffect(() => {
    if (currentView === 'all tasks') {
      setCurrentTasks(tasks);
    }
  }, [navbarOpen]);

  function toggleProjectModal() {
    setProjectModalOpen(!projectModalOpen);
  }

  function toggleTaskModal() {
    setTaskModalOpen(!taskModalOpen);
  }

  function handleToggle() {
    setNavbarOpen(!navbarOpen);
    setShowTasks(!showTasks);
  }

  function toggleCompleted(id) {
    const currentTaskIndex = currentTasks.findIndex((task) => task.id === id);
    const isCompleted = currentTasks[currentTaskIndex].completed;
    setCurrentTasks([
      ...currentTasks.slice(0, currentTaskIndex),
      { ...currentTasks[currentTaskIndex], completed: !isCompleted },
      ...currentTasks.slice(currentTaskIndex + 1),
    ]);
    const taskIndex = tasks.findIndex((task) => task.id === id);
    setTasks([
      ...tasks.slice(0, taskIndex),
      { ...tasks[taskIndex], completed: !isCompleted },
      ...tasks.slice(taskIndex + 1),
    ]);
  }

  function removeTask(id) {
    const currentTaskIndex = currentTasks.findIndex((task) => task.id === id);
    setCurrentTasks([
      ...currentTasks.slice(0, currentTaskIndex),
      ...currentTasks.slice(currentTaskIndex + 1),
    ]);
    const taskIndex = tasks.findIndex((task) => task.id === id);
    setTasks([...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)]);
  }

  function handleMenuClick(type) {
    handleSidebarClick(type);
    setShowTasks(true);
    setNavbarOpen(false);
  }

  function updateCounts() {
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    let todayTotal = 0;
    let weekTotal = 0;
    let monthTotal = 0;
    tasks.forEach((task) => {
      if (task.dueDate === currentDate) {
        todayTotal += 1;
      }
      if (isThisWeek(parseISO(task.dueDate))) {
        weekTotal += 1;
      }
      if (isThisMonth(parseISO(task.dueDate))) {
        monthTotal += 1;
      }
    });
    setTodayCount(todayTotal);
    setWeekCount(weekTotal);
    setMonthCount(monthTotal);
  }

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

  function updateCurrentTasks(task) {
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    if (currentView === 'all') {
      setCurrentTasks([...currentTasks, task]);
    }
    if (task.dueDate === currentDate && currentView === 'today') {
      setCurrentTasks([...currentTasks, task]);
    }
    if (isThisWeek(parseISO(task.dueDate)) && currentView === 'week') {
      setCurrentTasks([...currentTasks, task]);
    }
    if (isThisMonth(parseISO(task.dueDate)) && currentView === 'month') {
      setCurrentTasks([...currentTasks, task]);
    }
    if (task.project === currentView) {
      setCurrentTasks([...currentTasks, task]);
    }
  }

  function handleNewTask(task) {
    setTasks((prevTasks) => [...prevTasks, task]);
    increaseCount(task);
    updateCurrentTasks(task);
  }

  function handleNewProject(project) {
    setProjects((prevProjects) => [...prevProjects, project]);
  }

  function getTodaysTasks() {
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    let todaysTasks = [];
    tasks.forEach((task) => {
      if (task.dueDate === currentDate) {
        todaysTasks = [...todaysTasks, task];
      }
    });
    return todaysTasks;
  }

  function getWeeksTasks() {
    let weeksTasks = [];
    tasks.forEach((task) => {
      if (isThisWeek(parseISO(task.dueDate))) {
        weeksTasks = [...weeksTasks, task];
      }
    });
    return weeksTasks;
  }

  function getMonthsTasks() {
    let monthsTasks = [];
    tasks.forEach((task) => {
      if (isThisMonth(parseISO(task.dueDate))) {
        monthsTasks = [...monthsTasks, task];
      }
    });
    return monthsTasks;
  }

  function handleSidebarClick(type) {
    if (type === 'all tasks') {
      setCurrentView('all tasks');
      setCurrentTasks(tasks);
    }
    if (type === 'today') {
      setCurrentView('today');
      setCurrentTasks(getTodaysTasks());
    }
    if (type === 'this week') {
      setCurrentView('this week');
      setCurrentTasks(getWeeksTasks());
    }
    if (type === 'this month') {
      setCurrentView('this month');
      setCurrentTasks(getMonthsTasks());
    }
  }

  function getProjectTasks(projectName) {
    let projectTasks = [];
    tasks.forEach((task) => {
      if (task.project === projectName) {
        projectTasks = [...projectTasks, task];
      }
    });
    return projectTasks;
  }

  function handleSidebarProjectClick(type) {
    setCurrentView(type);
    setCurrentTasks(getProjectTasks(type));
    setNavbarOpen(false);
    setShowTasks(true);
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

  function handleEdit(id, form) {
    const currentTaskIndex = currentTasks.findIndex((task) => task.id === id);
    setCurrentTasks([
      ...currentTasks.slice(0, currentTaskIndex),
      {
        ...currentTasks[currentTaskIndex],
        title: form.title,
        description: form.description,
        dueDate: form.dueDate,
        priority: form.priority,
        project: form.project,
      },
      ...currentTasks.slice(currentTaskIndex + 1),
    ]);
    const taskIndex = tasks.findIndex((task) => task.id === id);
    setTasks([
      ...tasks.slice(0, taskIndex),
      {
        ...tasks[taskIndex],
        title: form.title,
        description: form.description,
        dueDate: form.dueDate,
        priority: form.priority,
        project: form.project,
      },
      ...tasks.slice(taskIndex + 1),
    ]);
  }

  const projectElements = projects.map((item) => {
    if (item.title !== 'Default') {
      return (
        <li
          key={item.id}
          className="navbar-item"
          onClick={() => handleSidebarProjectClick(item.title)}
        >
          <BsClipboardData className="navbar-image" />{' '}
          <span className="navbar-item-title">{item.title}</span>
          <span className="navbar-number">
            {countOccurancesProject(item.title)}
          </span>
        </li>
      );
    }
    return undefined;
  });

  return (
    <section>
      <div>
        <Header isOpen={navbarOpen} toggle={handleToggle} />
        <Navbar
          handleClick={handleMenuClick}
          today={todayCount}
          week={weekCount}
          month={monthCount}
          projects={projectElements}
          isOpen={navbarOpen}
          toggleProjectModal={toggleProjectModal}
          toggleTaskModal={toggleTaskModal}
        />
      </div>
      <TaskWindow
        className="task-window"
        page={currentView}
        tasks={currentTasks}
        show={showTasks}
        projects={projects}
        toggleCompleted={toggleCompleted}
        removeTask={removeTask}
        handleEdit={handleEdit}
      />
      {taskModalOpen && (
        <TaskModal
          projects={projects}
          addTask={handleNewTask}
          toggleModal={toggleTaskModal}
        />
      )}
      {projectModalOpen && (
        <ProjectModal
          addProject={handleNewProject}
          toggleModal={toggleProjectModal}
        />
      )}
    </section>
  );
}

export default Main;
