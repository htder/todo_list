import Sidebar from './Sidebar.js';
import Todo from './Todo.js';

import { useState } from 'react';

function Main() {
  const [tasks, setTasks] = useState([{
    title: "title test",
    description: "description test",
    dueDate: "due date test",
    completed: false,
    priority: 0,
    project: "project test"
  }]);

  const taskElements = tasks.map(task => {
    return (
      <Todo 
        title={task.title} 
        description={task.description}
        dueDate={task.dueDate}
        completed={task.completed}
        priority={task.priority}
        project={task.project}
      />
    ) 
  })
  return (
    <section>
      <div>Main</div>
      <div>{taskElements}</div>
      <Sidebar />
    </section>
  );
};

export default Main;
