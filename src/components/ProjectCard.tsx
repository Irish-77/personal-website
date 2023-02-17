import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';

// Styling
import './../styles/Projects.css';
import './../styles/ProjectCard.css';
import './../styles/FlipTransition.css';

function ProjectCard({ onClick, image, name, description, id, skills, repoURL }: any) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-front">
                <div style={{ backgroundImage: `url(${image})` }} className="project-image" />
                <h1> {name} </h1>
            </div>
            <div className="card-back">
                <h3> {name} </h3>
                
                <br />
                <h4> Description </h4>
                { description }
                <h4> Technology Stack/Skills: </h4>
                { skills }
                <div className="project-card-bottom-section">
                <hr />
                <a href={ repoURL } target="_blank" rel="noreferrer"><GitHubIcon className="project-card-git-repo"/> </a>
                </div>
                

            </div>

        </div>
    )
}

export default ProjectCard;