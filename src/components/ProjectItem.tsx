// General Imports
import React from 'react';

import ProjectCard from './ProjectCard';

import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';


function ProjectItem({ image, name, description, id, skills, repoURL }: any) {

    const [showFront, setShowFront] = useState(true);

    return (
        <div className="project-item">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <ProjectCard onClick={() => {
                    setShowFront((v) => !v);
                }}
                id={id} name={name} description={description} image={image} skills={skills} repoURL={repoURL} 
                />

            </CSSTransition>
   
        
        </div>
    )
}

export default ProjectItem