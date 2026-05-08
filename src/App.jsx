import "./App.css"

// Components
import Addproject from "./components/AddProject/AddProject"
import Navbar from "./components/Navbar/Navbar"
import ProjectList from "./components/ProjectList/ProjectList"

function App() {
  return (
    <div className="wrapper-app">
      <Navbar />
      <main>
        <Addproject />
        <hr />
        <ProjectList />
      </main>
    </div>
  )
}

export default App
