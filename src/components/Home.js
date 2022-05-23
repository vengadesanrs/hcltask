import Tasklist from "./Tasklist";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
const Home = () => {
    const { error, isPending, data:listOftask} = useFetch('http://localhost:8000/taskList');

    const taskMarkDone = (task) => {
        const testUpdate = {...task, completed:true};
        console.log(testUpdate);
        fetch("http://localhost:8000/taskList/"+ task.id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(testUpdate),
        }).then(() => {
          console.log("Marked Successfully")
        });
      };

      useEffect(()=>{
            console.log("test");
          //  setlistOftask(data)
      },[])

    return ( 
        <div className="container">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { listOftask && <Tasklist listOftask={listOftask} markDoneFn ={taskMarkDone}/> }
        </div> 
    );
}
 
export default Home;