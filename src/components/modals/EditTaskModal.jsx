import React, { useState } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import '../../styles/TaskModal.css';

function EditTaskModal({
  projects,
  closeModal,
  todoTitle,
  todoDescription,
  todoDueDate,
  todoPriority,
  todoProject,
  edit,
  id,
}) {
  const [form, setForm] = useState({
    title: todoTitle,
    description: todoDescription,
    dueDate: todoDueDate,
    completed: false,
    priority: todoPriority,
    project: todoProject,
  });

  const [formErrors, setFormErrors] = useState({});

  function handleChange(event, type) {
    const input = event.target.value;
    setForm((prevForm) => ({
      ...prevForm,
      [type]: input,
    }));
  }

  function clearForm() {
    setForm({
      title: '',
      description: '',
      dueDate: '',
      completed: false,
      priority: 'low',
      project: form.project,
    });
  }

  function validateForm() {
    const errors = {};
  }

  function handleClose() {
    closeModal();
    // clearForm();
  }

  function handleEdit(event) {
    event.preventDefault();
    edit(id, form);
    closeModal();
  }

  const projectList = projects.map((item) => (
    <option key={item.id}>{item.title}</option>
  ));

  return (
    <div className="container">
      <div className="modal">
        <div className="modal-content">
          <AiOutlineFileAdd className="modal-image" />
          <div className="modal-header">
            <h2>Edit Project</h2>
            <button
              type="button"
              className="close-button"
              onClick={() => handleClose()}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <MdClose />
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleEdit}>
              <div className="modal-input">
                <label className="input-label" htmlFor="title">
                  Title:{' '}
                </label>
                <input
                  className="title-input"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  value={form.title}
                  onChange={(event) => handleChange(event, 'title')}
                />
              </div>
              <div className="modal-input">
                <label htmlFor="dueDate" className="modal-date">
                  <input
                    name="dueDate"
                    type="date"
                    id="dueDate"
                    value={form.dueDate}
                    onChange={(event) => handleChange(event, 'dueDate')}
                  />
                  <span>Date Due</span>
                </label>
              </div>
              <div className="modal-input">
                <label htmlFor="project" className="modal-select">
                  <select
                    onChange={(event) => handleChange(event, 'project')}
                    defaultValue={todoProject}
                  >
                    {projectList}
                  </select>
                  <span>Project</span>
                </label>
              </div>
              <div className="modal-input">
                <label className="input-label" htmlFor="description">
                  Description:{' '}
                </label>
                <textarea
                  className="modal-textarea"
                  type="text"
                  name="description"
                  rows="5"
                  id="description"
                  placeholder="Description"
                  value={form.description}
                  onChange={(event) => handleChange(event, 'description')}
                />
              </div>
              <div className="modal-input">
                <fieldset className="priority">
                  <legend className="input-label">Priority</legend>
                  <label htmlFor="radio1">
                    <input
                      type="radio"
                      id="radio1"
                      name="priority"
                      value="high"
                      checked={form.priority === 'high'}
                      onChange={(event) => handleChange(event, 'priority')}
                    />
                    High Priority
                  </label>
                  <label htmlFor="radio2">
                    <input
                      type="radio"
                      id="radio2"
                      name="priority"
                      value="medium"
                      checked={form.priority === 'medium'}
                      onChange={(event) => handleChange(event, 'priority')}
                    />
                    Medium Priority
                  </label>
                  <label htmlFor="radio3">
                    <input
                      type="radio"
                      id="radio3"
                      name="priority"
                      value="low"
                      checked={form.priority === 'low'}
                      onChange={(event) => handleChange(event, 'priority')}
                    />
                    Low Priority
                  </label>
                </fieldset>
              </div>
              <button
                type="submit"
                className="modal-submit"
                onClick={handleEdit}
              >
                Submit
              </button>
              <small className="titleError" />
              <small className="descError" />
              <small className="dateError" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
