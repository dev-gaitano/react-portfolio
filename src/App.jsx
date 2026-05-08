import "./App.css"

// Components
import Addproject from "./components/AddProject/AddProject"
import Navbar from "./components/Navbar/Navbar"
import ProjectList from "./components/ProjectList/ProjectList"

function App() {
  return (
    <div className="wrapper-app">
      <Navbar />
      <Addproject />
      <ProjectList />
    </div>
  )
}

export default App
