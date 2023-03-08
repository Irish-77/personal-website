// General
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

// Components
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

// Services
import { BlogList } from '../services/BlogList';

// Styles
import 'katex/dist/katex.min.css';
import '../styles/BlogDisplay.css';

function BlogDisplay() {

  useEffect(() => {
    document.title = 'Blog';
  }, []);

  const { id } = useParams();
  const blogPost = BlogList[id];

  return (
    <div>
      <div style={{ backgroundImage: `url(${blogPost.image})` }} className="blog-cover" />
      <div className="blog-post">
        <ReactMarkdown
          children={String(blogPost.content).replaceAll("%%URL%%", process.env.REACT_APP_BASE_URL)}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
        />
      </div>
    </div>
  )
}

export default BlogDisplay