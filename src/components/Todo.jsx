import React, { useState } from 'react';
import '../styles/Todo.css';
import {
  MdCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import EditTaskModal from './modals/EditTaskModal';

function Todo({
  title,
  description,
  dueDate,
  completed,
  priority,
  project,
  projects,
  toggleCompleted,
  id,
  removeTask,
}) {
  const [showMore, setShowMore] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  function toggleModal() {
    setEditModalOpen(!editModalOpen);
  }

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
      <div className="todo-main-visible">
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
      </div>
      {showMore && (
        <div className="todo-bottom-row">
          <div className="todo-bottom-title">
            <p className="todo-bottom-header">Title</p>
            <p>{title}</p>
          </div>
          <div className="todo-bottom-description">
            <p className="todo-bottom-header">Description</p>
            <p>{description}</p>
          </div>
          <div className="todo-bottom-project">
            <p className="todo-bottom-header">Project</p>
            <p>{project}</p>
          </div>
          <div className="todo-bottom-priority">
            <p className="todo-bottom-header">Priority</p>
            <p>{priority}</p>
          </div>
          <button type="button" onClick={toggleModal}>
            Edit
          </button>
        </div>
      )}
      {editModalOpen && (
        <EditTaskModal
          projects={projects}
          closeModal={toggleModal}
          todoTitle={title}
          todoDescription={description}
          todoDueDate={dueDate}
          todoPriority={priority}
          todoProject={project}
        />
      )}
    </div>
  );
}

export default Todo;
