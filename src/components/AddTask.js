import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [expireTime, setexpireTime] = useState();
  const [createdTime, setcreatedTime] = useState(new Date().getTime());
  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, body, createdTime, expireTime };

    fetch("http://localhost:8000/taskList/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(() => {
      redirect("/");
    });
  };

  return (
    <div className="Add-form">
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Task title:</label>
          <input className="form-control"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Task Details:</label>
          <textarea  className="form-control"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Task Due Date:</label>
          <input  className="form-control"
            type="datetime-local"
            required
            value={expireTime}
            onChange={(e) => setexpireTime(e.target.value)}
          />
        </div>
        <button className="btn btn-info">Add Blog</button>
      </form>
    </div>
  );
};

export default AddTask;
