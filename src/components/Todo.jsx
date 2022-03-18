import React, { useState } from 'react';
import '../styles/Todo.css';
import {
  MdCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';

function Todo({
  title,
  description,
  dueDate,
  completed,
  priority,
  project,
  toggleCompleted,
  id,
  removeTask,
}) {
  const [showMore, setShowMore] = useState(false);

  function handleArrowClick() {
    setShowMore(!showMore);
  }

  function handleCheckClick() {
    toggleCompleted(id);
  }

  function handleDelete() {
    removeTask(id);
  }

  return (
    <div className="todo-container">
      <div className="todo-top-row">
        <span
          className={`todo-item todo-title ${completed ? 'completed' : ''}`}
        >
          {title}
        </span>
        <span className="todo-item todo-date">{dueDate}</span>
      </div>
      <div className="todo-middle-row">
        {completed ? (
          <MdOutlineCheckBox onClick={handleCheckClick} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={handleCheckClick} />
        )}
        {showMore ? (
          <MdKeyboardArrowUp onClick={handleArrowClick} />
        ) : (
          <MdKeyboardArrowDown onClick={handleArrowClick} />
        )}
        <BsTrash onClick={handleDelete} />
      </div>
      {showMore && (
        <div className="todo-bottom-row">
          <div>
            <p>Description</p>
            <p>{description}</p>
          </div>
          <div>
            <p>Project</p>
            <p>{project}</p>
          </div>
          <div>
            <p>Priority</p>
            <p>{priority}</p>
          </div>
        </div>
      )}
      {/* <span className="todo-item todo-desc">{description}</span> */}
      {/* <p>Completed: {completed}</p> */}
      {/* <p>Priority: {priority}</p> */}
      {/* <p>Project: {project}</p> */}
    </div>
  );
}

export default Todo;
