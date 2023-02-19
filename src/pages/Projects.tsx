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
      <div className="project-list">
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} description={project.description} image={project.image} stack={project.stack} skills={project.skills} repoURL={project.repoURL} />
        })}

      </div>
    </div>
  )
}

export default Projects