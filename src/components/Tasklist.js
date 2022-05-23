import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Tasklist = ({ listOftask,  markDoneFn}) => {

const [list, setList] = useState(listOftask);
    

const diff = () => {
    let newList =  listOftask.map((t) => {
        if(new Date(t.expireTime).getTime() < new Date().getTime()){
           return   {...t, expire:true}
        }else{
           return   {...t, expire:false}
        }
    });
    let sortListDate =  newList.sort(function (a, b) {
      if(new Date(b.expireTime).getTime() > new Date(a.expireTime).getTime()){
       return -1;
      }
      if(new Date(b.expireTime).getTime() < new Date(a.expireTime).getTime()){
       return 1;
      }
      return 0;
   });
 
    setList(sortListDate);
}

 useEffect(diff,[])
//console.log(list)

  return (
    <>
      {list.map((task) => (
        <div className="task-list" key={task.id} >
          <Link to={`/taskDetails/${task.id}`} style={{"textDecoration":task.completed ? "line-through": "none"}}>
            <p>
              {task.title}{" "}
              <span>
                , Created : {new Date(task.createdTime).toDateString()}
              </span>
              <span>, Due On : {new Date(task.expireTime).toDateString()}</span>
            </p>
          </Link>
          {(!task.completed && task.expire) && <span style={{color:"red"}}> over due </span>}
         {!task.completed && <button className="btn btn btn-success" onClick={() => markDoneFn(task)}>Mark Done</button>} 
        </div>
      ))}
    </>
  );
};

export default Tasklist;
