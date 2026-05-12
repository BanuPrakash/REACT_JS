import { useState } from "react"
import First from "./context/First"
import ProfileContextProvider from "./context/ProfileContextProvider"
import ParentComponent from "./renderissue/ParentComponent"
import UsersComponent from "./hooks/UsersComponent";
import PostsComponent from "./hooks/PostsComponent";
import TaskManager from "./hooks/TaskManager";


function App() {
  return <TaskManager />

  // let [id, setId] = useState(1);
  // return <div className="row">
  //   <div className="col-md-4">
  //     <UsersComponent setUserID={setId}/>
  //   </div>
  //   <div className="col-md-8">
  //     <PostsComponent uid={id} />
  //   </div>
  // </div>

  //return <ParentComponent />
  // return <ProfileContextProvider>
  //         <First />
  // </ProfileContextProvider>

  
}

export default App
