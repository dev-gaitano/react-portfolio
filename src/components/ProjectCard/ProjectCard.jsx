import "./ProjectCard.css"

function ProjectCard({ thumbnail, name, description }) {
  return (
    <div className="wrapper-project-card">
      <img src={thumbnail || "https://i.pinimg.com/736x/99/4e/63/994e6327635c4055c7caaf95810d50f3.jpg"} alt="project thumbnail" />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
