import React from 'react';
import '../styles/Todo.css';
import {
  MdCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';

function Todo({ title, description, dueDate, completed, priority, project }) {
  return (
    <div className="todo-container">
      <div className="todo-top-row">
        <span className="todo-item todo-title">{title}</span>
        <span className="todo-item todo-date">{dueDate}</span>
      </div>
      <div className="todo-middle-row">
        <MdCheckBoxOutlineBlank />
        <MdKeyboardArrowDown />
        <BsTrash />
      </div>
      <div className="todo-bottom-row">bottom</div>
      {/* <span className="todo-item todo-desc">{description}</span> */}
      {/* <p>Completed: {completed}</p> */}
      {/* <p>Priority: {priority}</p> */}
      {/* <p>Project: {project}</p> */}
    </div>
  );
}

export default Todo;
