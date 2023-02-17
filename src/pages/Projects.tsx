// Imports
import React from 'react';

// Components
import ProjectItem from '../components/ProjectItem';

// Services
import { ProjectList } from '../services/ProjectList';

// Styles
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects </h1>
      <div className="project-list">
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} skills={project.skills} repoURL={project.repoURL} />
        })}

      </div>
    </div>
  )
}

export default Projects