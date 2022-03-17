import React, { useState } from 'react';
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
  }

  function handleClose() {
    toggleModal();
    clearForm();
  }

  return (
    <div className="project-modal">
      <div role="document">
        <div>
          <div>
            <h2>Add a new project!</h2>
            <button type="button" onClick={() => handleClose()}>Close</button>
          </div>

          <div>
            <form onSubmit={handleSubmit} id="new-project-form">
              <div>
                <label htmlFor="title">
                  <input
                    name="title"
                    type="text"
                    id="name"
                    placeholder="Project Name"
                    onChange={handleChange}
                    value={project.title}
                  />
                  Name
                </label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
