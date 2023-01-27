// General Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({image, name, id, skills, repoURL}: any) {

    const navigate = useNavigate();

    return (
        <div
            className="projectItem"
            onClick={() => {
                // navigate("/project/" + id);
                window.location.href = repoURL;
            }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1> {name} </h1>
            <p> {skills} </p>
        </div>
    )
}

export default ProjectItem