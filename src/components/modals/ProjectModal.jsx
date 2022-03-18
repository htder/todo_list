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
    <div className="container">
      <div role="document" className="modal">
        <div className="modal-content">
          <AiOutlineFolderAdd className="modal-image" />
          <div className="modal-header">
            <h2 className="title">Add a new project!</h2>
            <button
              className="close-button"
              type="button"
              onClick={() => handleClose()}
            >
              <MdClose />
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit} id="new-project-form">
              <div className="modal-input">
                <label className="input-label" htmlFor="title">
                  Name:{' '}
                </label>
                <input
                  name="title"
                  className="input-text"
                  type="text"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={project.title}
                />
              </div>
              <button className="modal-submit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
