import "./ProjectCard.css"

function ProjectCard({ thumbnail, name, description }) {
  return (
    <div className="wrapper-project-card">
      <div className="project-thumbnail-container">
        <img
          className="project-thumbnail"
          src={thumbnail || "https://i.pinimg.com/736x/99/4e/63/994e6327635c4055c7caaf95810d50f3.jpg"}
          alt={name}
        />
      </div>
      <div className="project-details">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
