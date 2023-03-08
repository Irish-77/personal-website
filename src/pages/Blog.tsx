// General
import React, { useEffect } from 'react';

// Components
import BlogItem from '../components/BlogItem';

// Services
import { BlogList } from '../services/BlogList'

// Styles
import '../styles/Blog.css';

function Blog() {

  useEffect(() => {
    document.title = 'Blog';
  }, []);

  return (

    <div className="blog-posts">
      <div className="blog-post-list">
        {BlogList.map((blogPosts, idx) => {
          return <BlogItem id={idx} title={blogPosts.title} image={blogPosts.image} summary={blogPosts.summary} />
        })}

      </div>
    </div>
  )
}

export default Blog