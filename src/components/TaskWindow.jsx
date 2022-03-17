import React from 'react';
import Todo from './Todo';

function TaskWindow({ tasks }) {
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

  return <div>{taskElements}</div>;
}

export default TaskWindow;
