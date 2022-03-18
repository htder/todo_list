import React from 'react';
import '../styles/Todo.css';

function Todo({ title, description, dueDate, completed, priority, project }) {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Due Date: {dueDate}</p>
      {/* <p>Completed: {completed}</p> */}
      {/* <p>Priority: {priority}</p> */}
      {/* <p>Project: {project}</p> */}
    </div>
  );
}

export default Todo;
