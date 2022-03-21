import React from 'react';
import '../styles/TaskWindow.css';
import { BsTrash } from 'react-icons/bs';
import {
  MdCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import Todo from './Todo';

function TaskWindow({
  tasks,
  show,
  page,
  projects,
  toggleCompleted,
  removeTask,
  handleEdit,
}) {
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
      handleEdit={handleEdit}
      page={page}
      show={show}
    />
  ));

  const noItems = (
    <div className="todo-container">
      <h3 className="todo-container-title">{page}</h3>
      <div className="todo-main-visible">
        <div className="todo-top-row">
          <div className="no-tasks">
            <span>
              You currently have no tasks
              {page === 'all tasks' ? '.' : ` for ${page}.`}
            </span>
            <span>Create a new task or project from the menu.</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="task-window">
      <div className="task-window-container">
        {show && taskElements}
        {!tasks.length && noItems}
      </div>
    </div>
  );
}

export default TaskWindow;
