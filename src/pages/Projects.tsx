// General Imports
import React from 'react';

// Import Components
import ProjectItem from '../components/ProjectItem';

// Import Services
import { ProjectList } from '../services/ProjectList';

// Styles
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects </h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} skills={project.skills} />
        })}

      </div>
    </div>
  )
}

export default Projects