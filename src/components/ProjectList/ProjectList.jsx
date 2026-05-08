import "./ProjectList.css"

import ProjectCard from "../ProjectCard/ProjectCard"

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
  ]

  return (
    <div className="wrapper-project-list">
      <input type="search" name="search-projects" placeholder="Search projects" />
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          thumbnail={project.thumbnail}
          name={project.name}
          description={project.description}
        />
      ))}
    </div>
  )
}

export default ProjectList
