import { useState } from 'react';

function TaskModal({projects}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    completed: false,
    priority: "low",
    project: "All Tasks",
  })

  function handleChange(event, type) {
    const input = event.target.value;
    setForm(prevForm => ({
        ...form,
        [type]: input,
      })
    );
  };

  const projectList = projects.map((item, i) => {
    return (
      <option key={i}>{item.title}</option>
    );
  }) 

  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Add a new task!</h2>
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div>
            <form>
              <div>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  value={form.title}
                  onChange={(event) => handleChange(event, "title")}
                />
                <label htmlFor="title">Title</label>
              </div>
              <div>
                <textarea
                  type="text"
                  name="description"
                  rows="5"
                  id="description"
                  placeholder="Description"
                  value={form.description}
                  onChange={(event) => handleChange(event, "description")}
                ></textarea>
                <label htmlFor="description">Description</label>
              </div>

              <div>
                <input
                  name="dueDate"
                  type="date"
                  id="dueDate"
                  value={form.dueDate}
                  onChange={(event) => handleChange(event, "dueDate")}
                />
                <label htmlFor="dueDate">Due Date</label>
              </div>
              <div>
                <select onChange={(event) => handleChange(event, "project")}>
                  {projectList}
                </select>
              </div>
              <fieldset>
                <legend>Priority</legend>
                <label htmlFor="radio1">
                  <input
                    type="radio"
                    id="radio1"
                    name="priority"
                    value="high"
                    checked={form.priority === "high"}
                    onChange={(event) => handleChange(event, "priority")}
                  />
                  High Priority
                </label>
                <label htmlFor="radio2">
                  <input
                    type="radio"
                    id="radio2"
                    name="priority"
                    value="medium"
                    checked={form.priority === "medium"}
                    onChange={(event) => handleChange(event, "priority")}
                  />
                  Medium Priority
                </label>
                <label htmlFor="radio3">
                  <input
                    type="radio"
                    id="radio3"
                    name="priority"
                    value="low"
                    checked={form.priority === "low"}
                    onChange={(event) => handleChange(event, "priority")}
                  />
                  Low Priority
                </label>
              </fieldset>
              <button
                type="submit"
              >
                Submit
              </button>
              <small className="titleError"></small>
              <small className="descError"></small>
              <small className="dateError"></small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
