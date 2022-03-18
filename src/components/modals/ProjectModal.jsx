import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import '../../styles/ProjectModal.css';

function ProjectModal({ addProject, toggleModal }) {
  const [project, setProject] = useState({
    title: '',
  });

  function handleChange(event) {
    setProject({
      title: event.target.value,
    });
  }

  function clearForm() {
    setProject({ title: '' });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newProject = project;
    clearForm();
    addProject(newProject);
    toggleModal();
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
