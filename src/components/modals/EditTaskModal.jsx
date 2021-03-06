import React, { useState } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import '../../styles/TaskModal.css';
import { isDate, parseISO, toDate } from 'date-fns';

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

  function handleClose() {
    closeModal();
  }

  function handleEdit(event) {
    event.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      edit(id, form);
      closeModal();
    }
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
