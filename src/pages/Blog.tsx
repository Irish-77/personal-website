// General
import React from 'react'

// Components
import BlogItem from '../components/BlogItem';

// Services
import { BlogList } from '../services/BlogList'

// Styles
import '../styles/Blog.css';

function Blog() {

  return (

    <div className="blog-posts">
      <h1> My Personal Blog Page </h1>
      <div className="blog-post-list">
        {BlogList.map((blogPosts, idx) => {
          return <BlogItem id={idx} title={blogPosts.title} image={blogPosts.image} summary={blogPosts.summary} />
        })}

      </div>
    </div>
  )
}

export default Blog