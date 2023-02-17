// General Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

function BlogItem({image, title, id, summary}: any) {

    const navigate = useNavigate();

    return (
        <div
            className="blog-entry"
            onClick={() => {
                navigate("/blog/" + id);
            }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="blog-image" />
            <h1> {title} </h1>
            <p> {summary} </p>
        </div>
    )
}

export default BlogItem