import "./ProjectCard.css"

function ProjectCard({ thumbnail, name, description }) {
  return (
    <div className="wrapper-project-card">
      <img
        className="project-thumbnail"
        src={thumbnail || "https://i.pinimg.com/736x/99/4e/63/994e6327635c4055c7caaf95810d50f3.jpg"}
        alt="thumbnail"
      />
      <div className="project-details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
