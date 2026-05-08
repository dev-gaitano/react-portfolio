import "./App.css"
import Addproject from "./components/AddProject"
import Navbar from "./components/Navbar"
import ProjectList from "./components/ProjectList"

function App() {
  return (
    <>
      <Navbar />
      <Addproject />
      <ProjectList />
    </>
  )
}

export default App
