import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import '../../styles/ProjectModal.css';
import { nanoid } from 'nanoid';

function ProjectModal({ addProject, toggleModal }) {
  const [project, setProject] = useState({
    title: '',
  });
  const [formErrors, setFormErrors] = useState({});

  function handleChange(event) {
    setProject({
      title: event.target.value,
      id: nanoid(),
    });
  }

  function clearForm() {
    setProject({ title: '' });
  }

  function validateForm() {
    const errors = {};
    let isValid = true;
    if (project.title.length <= 2) {
      isValid = false;
      errors.title = 'Project name needs to be longer than two characters.';
    }
    setFormErrors(errors);
    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newProject = project;
    const isCorrectInput = validateForm();
    if (isCorrectInput) {
      clearForm();
      addProject(newProject);
      toggleModal();
    } else {
      console.log('fail');
    }
  }

  function handleClose() {
    toggleModal();
    clearForm();
  }

  return (
    <div className="project-container">
      <div role="document" className="project-modal">
        <div className="project-modal-content">
          <AiOutlineFolderAdd className="project-modal-image" />
          <div className="project-modal-header">
            <h2 className="project-title">Add a new project!</h2>
            <button
              className="project-close-button"
              type="button"
              onClick={() => handleClose()}
            >
              <MdClose />
            </button>
          </div>

          <div className="project-modal-body">
            <form onSubmit={handleSubmit} id="new-project-form">
              <div className="project-modal-input">
                <label className="project-input-label" htmlFor="title">
                  Name:{' '}
                </label>
                <input
                  name="title"
                  className="project-input-text"
                  type="text"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={project.title}
                />
                <div className="project-form-error">{formErrors.title}</div>
              </div>
              <button className="project-modal-submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
