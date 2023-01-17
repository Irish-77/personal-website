// General
import React from 'react'
import { useParams } from "react-router-dom";

// Components
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

// Services
import { BlogList } from '../services/BlogList'

// Styles
import 'katex/dist/katex.min.css';

function BlogDisplay() {

  const { id } = useParams();
  const blogPost = BlogList[id];

  return (
    <div>
      <ReactMarkdown
        children={String(blogPost.content).replaceAll("%%URL%%", process.env.REACT_APP_BASE_URL)}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
      />
    </div>
  )
}

export default BlogDisplay