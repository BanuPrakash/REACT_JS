import { useReducer, useState } from "react";
import taskReducer from "../reducers/taskReducer";

const initialState = [];

export default function TaskManager() {
    let [tasks, dispatch] = useReducer(taskReducer, initialState);
    let [taskData, setTaskData] = useState();
  
    return(
        <div>
            <input type="text" onChange={(evt) => setTaskData(evt.target.value)}/> 

            <button type="button" 
            onClick={() =>  dispatch({'type': 'ADD_TASK', payload:taskData})}>Add Task</button>

            <ul>
                {tasks.map(task => (
                    <li key={task.id} style={{textDecoration: task.completed? 'line-through': 'none'}}>
                        <span onClick={() => dispatch({type:'TOGGLE_TASK', payload: task.id})}>
                            {task.text}
                        </span>
                         <button type="button" onClick={() => dispatch({type:'REMOVE_TASK', payload: task.id})}>
                            Delete
                         </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}