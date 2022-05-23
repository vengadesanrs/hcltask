import { useNavigate , useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const TaskDetails = () => {
  const { id } = useParams();
  const { data: task, error, isPending } = useFetch('http://localhost:8000/taskList/' + id);
  const redirect = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8000/taskList/' + task.id, {
      method: 'DELETE'
    }).then(() => {
        redirect("/")
    }) 
  }

  return (
    <div className="task-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { task && (
        <article>
          <h2>{ task.title }</h2>
          <p>Created On : { new Date(task.createdTime).toDateString()}</p>
          <div>{ task.body }</div>
          <p>Due On : {new Date(task.expireTime).toDateString()}</p>
          <button onClick={handleClick} className="btn btn-danger">delete</button>
        </article>
      )}
    </div>
  );
}
 
export default TaskDetails;