// General Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

function BlogItem({image, title, id, summary}: any) {

    const navigate = useNavigate();

    return (
        <div
            className="projectItem"
            onClick={() => {
                navigate("/blog/" + id);
            }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1> {title} </h1>
            <p> {summary} </p>
        </div>
    )
}

export default BlogItem