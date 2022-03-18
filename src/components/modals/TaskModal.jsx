import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import '../../styles/TaskModal.css';

function TaskModal({ projects, addTask, toggleModal }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    dueDate: '',
    completed: false,
    priority: 'low',
    project: 'Default',
  });

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
    addTask(task);
    clearForm();
    toggleModal();
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
          <AiOutlineFileAdd className="modal-image"/>
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

          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={(event) => handleChange(event, 'title')}
                  />
                  Title
                </label>
              </div>
              <div>
                <label htmlFor="description">
                  <textarea
                    type="text"
                    name="description"
                    rows="5"
                    id="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={(event) => handleChange(event, 'description')}
                  />
                  Description
                </label>
              </div>

              <div>
                <label htmlFor="dueDate">
                  <input
                    name="dueDate"
                    type="date"
                    id="dueDate"
                    value={form.dueDate}
                    onChange={(event) => handleChange(event, 'dueDate')}
                  />
                  Due Date
                </label>
              </div>
              <div>
                <label htmlFor="project">
                  <select onChange={(event) => handleChange(event, 'project')}>
                    {projectList}
                  </select>
                  Project
                </label>
              </div>
              <fieldset>
                <legend>Priority</legend>
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
              <button type="submit">Submit</button>
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
