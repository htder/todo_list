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
  handleEdit,
  page,
  index,
}) {
  const [showMore, setShowMore] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  function handleArrowClick() {
    setShowMore(!showMore);
  }

  function toggleModal() {
    setEditModalOpen(!editModalOpen);
    setShowMore(false);
  }

  function handleCheckClick() {
    toggleCompleted(id);
  }

  function handleDelete() {
    removeTask(id);
  }

  return (
    <div className="todo-container">
      {index === 0 && <h3 className="todo-container-title">{page}</h3>}
      <div className={`todo-main-visible ${priority}-priority`}>
        <div className="todo-top-row">
          <span
            className={`todo-item todo-title ${completed ? 'completed' : ''}`}
          >
            {title}
          </span>
          {/* <span className="todo-item todo-date">{dueDate}</span> */}
          <span className="todo-date">{dueDate}</span>
        </div>
        <div className="todo-middle-row">
          {completed ? (
            <MdOutlineCheckBox
              onClick={handleCheckClick}
              className="todo-image"
            />
          ) : (
            <MdCheckBoxOutlineBlank
              onClick={handleCheckClick}
              className="todo-image"
            />
          )}
          {showMore ? (
            <MdKeyboardArrowUp
              onClick={handleArrowClick}
              className="todo-image"
            />
          ) : (
            <MdKeyboardArrowDown
              onClick={handleArrowClick}
              className="todo-image"
            />
          )}
          <BsTrash onClick={handleDelete} className="todo-image" />
        </div>
      </div>
      {showMore && (
        <div className="todo-bottom-row">
          <div className="todo-bottom-title">
            {/* <p className="todo-bottom-header">Title</p> */}
            <p className="todo-bottom-info">{title}</p>
          </div>
          <div className="todo-bottom-description">
            {/* <p className="todo-bottom-header">Description</p> */}
            <p className="todo-bottom-info">{description}</p>
          </div>
          <div className="todo-bottom-project">
            {/* <p className="todo-bottom-header">Project</p> */}
            <p className="todo-bottom-info">Belongs to {project}</p>
          </div>
          <div className="todo-bottom-priority">
            {/* <p className="todo-bottom-header">Priority</p> */}
            <p className="todo-bottom-info">
              {priority.replace(/^\w/, (c) => c.toUpperCase())} priority
            </p>
          </div>
          <button
            type="button"
            onClick={toggleModal}
            className="todo-edit-button"
          >
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
          edit={handleEdit}
          id={id}
        />
      )}
    </div>
  );
}

export default Todo;
