import "./ProjectList.css"

import ProjectCard from "../ProjectCard/ProjectCard"
import InputSecondary from "../ui/InputSecondary"
import BtnPrimary from "../ui/BtnPrimary"

function ProjectList() {
  const projects = [
    {
      id: 1,
      thumbnail: "https://res.cloudinary.com/diwkfbsgv/image/upload/v1775206748/logo_u4sz9t.svg",
      name: "TopBox Studio",
      description: " An AI powered content management system that helps teams create, organize, update, and publish digital content across multiple platforms. ",
    },
    {
      id: 2,
      thumbnail: "https://res.cloudinary.com/diwkfbsgv/image/upload/v1762926951/favicon_qzkvnv.png",
      name: "Wayalink",
      description: "A dual-interface logistics tracking system designed to improve end-to-end product visibility in fragmented supply chains. Built specifically for regions with low technology adoption ",
    },
    {
      id: 3,
      thumbnail: "https://res.cloudinary.com/diwkfbsgv/image/upload/v1777635327/nato-logo_rvlpns.png",
      name: "Nato Fashion",
      description: "A website revamp concept for Nato, an E-commerce website, offering a selection of high-end clothing and a premium shopping experience, focusing on elegance ",
    },
    {
      id: 4,
      thumbnail: "https://placehold.co/600x400/aa3bff/ffffff?text=EcoTrack",
      name: "EcoTrack",
      description: "A sustainability monitoring dashboard for small businesses to track carbon footprint and waste management efficiency.",
    },
    {
      id: 5,
      thumbnail: "https://placehold.co/600x400/08060d/ffffff?text=DevFlow",
      name: "DevFlow",
      description: "Streamlined developer workflow tool integrating task management with real-time CI/CD status updates.",
    },
    {
      id: 6,
      thumbnail: "https://placehold.co/600x400/6b6375/ffffff?text=HealthHub",
      name: "HealthHub",
      description: "Telemedicine platform connecting patients with local specialists for secure video consultations and record sharing.",
    },
  ]

  return (
    <div className="wrapper-project-list">
      <div className="search-bar">
        <InputSecondary type={"search"} name={"search-projects"} placeholder={"Search projects"} />
        <BtnPrimary type={"submit"} text={"Search"} />
      </div >
      <div className="project-grid" >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            thumbnail={project.thumbnail}
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
