import React from 'react';
import Todo from './Todo';
import '../styles/TaskWindow.css';

function TaskWindow({ tasks, show, page, projects, toggleCompleted, removeTask }) {
  const taskElements = tasks.map((task) => (
    <Todo
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      completed={task.completed}
      priority={task.priority}
      project={task.project}
      projects={projects}
      key={task.id}
      id={task.id}
      toggleCompleted={toggleCompleted}
      removeTask={removeTask}
    />
  ));

  return (
    <div className="task-window">
      <h3 className="task-window-title">{page}</h3>
      <div className="task-window-container">{show && taskElements}</div>
    </div>
  );
}

export default TaskWindow;
