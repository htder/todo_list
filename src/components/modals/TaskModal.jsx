import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import '../../styles/TaskModal.css';
import { isDate, parseISO } from 'date-fns';

function TaskModal({ projects, addTask, toggleModal }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    dueDate: '',
    completed: false,
    priority: 'low',
    project: 'Default',
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
    let isValid = true;
    if (form.title.length <= 2) {
      isValid = false;
      errors.title = 'Task title needs to be longer than two characters';
    }
    if (form.description.length <= 8) {
      isValid = false;
      errors.description =
        'Task description needs to be longer than eight characters';
    }
    if (!isDate(parseISO(form.dueDate))) {
      isValid = false;
      errors.date = 'Please enter a date in the dd/mm/yyyy format';
    }
    setFormErrors(errors);
    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const task = {
      title: form.title,
      description: form.description,
      dueDate: form.dueDate,
      completed: form.completed,
      priority: form.priority,
      project: form.project,
      id: nanoid(),
    };
    const isFormValid = validateForm();
    if (isFormValid) {
      addTask(task);
      clearForm();
      toggleModal();
    }
  }

  function handleClose() {
    clearForm();
    toggleModal();
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
            <h2>Add a new task!</h2>
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
            <form onSubmit={handleSubmit}>
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
                <div className="project-form-error">{formErrors.title}</div>
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
                <div className="project-form-error">{formErrors.date}</div>
              </div>
              <div className="modal-input">
                <label htmlFor="project" className="modal-select">
                  <select onChange={(event) => handleChange(event, 'project')}>
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
                <div className="project-form-error">
                  {formErrors.description}
                </div>
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
              <button type="submit" className="modal-submit">
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

export default TaskModal;
