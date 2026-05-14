import { useRef } from "react"
import { connect } from "react-redux";

function App(props) {
  let taskRef = useRef();

  function doSubmitTask() {
    props.addTask(taskRef.current.value)
  }
  return (
    <div>
      <h3>Welcome {props.userName}</h3>
      Enter Task: <input type="text" ref={taskRef} /> <br />
      <button type="button" onClick={doSubmitTask}>Add Task</button>
       <ul>
                {props.taskList.map(task => (
                    <li key={task.id} style={{textDecoration: task.completed? 'line-through': 'none'}}>
                        <span onClick={() => props.toggle(task.id)}>
                            {task.text}
                        </span>
                         <button type="button" onClick={() => props.remove(id)}>
                            Delete
                         </button>
                    </li>
                ))}
            </ul>
    </div>
  )
}

// takes state from redux and gives props to App
function mapStateToProps(state) {
  return {
    "userName": state.profile.name,
    "taskList": state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    "addTask" : taskText => dispatch({"type": "ADD_TASK", payload: taskText}),
    "toggle": (id) => dispatch({type:"TOGGLE_TASK", payload: id}),
    "remove": (id) => dispatch({type: "REMOVE_TASK", payload: id})
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
