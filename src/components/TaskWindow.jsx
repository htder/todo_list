import React from 'react';
import Todo from './Todo';
import '../styles/TaskWindow.css';

function TaskWindow({ tasks, show, page }) {
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
    <div className="task-window">
      <h3 className="task-window-title">{page}</h3>
      {show && taskElements}
    </div>
  );
}

export default TaskWindow;
