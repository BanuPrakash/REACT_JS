import First from "./context/First"
import ProfileContextProvider from "./context/ProfileContextProvider"
import ParentComponent from "./renderissue/ParentComponent"


function App() {
  //return <ParentComponent />
  return <ProfileContextProvider>
          <First />
  </ProfileContextProvider>
}

export default App
