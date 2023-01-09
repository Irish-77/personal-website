import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';


import 'katex/dist/katex.min.css';

import PacmanImage from '../assets/projects/project_image_pacman.jpeg';

function Blog() {

  const formula =  `
  Given a **formula** below $$\\frac{1}{2}$$
  
  Calculate the value of $s$ when $u = 10\\frac{m}{s}$ and $a = 2\\frac{m}{s^{2}}$ at $$t = 1s$$

  <img src="../project_image_pacman.jpeg" alt="Text">

  `;

  return (
    <div>
      <ReactMarkdown
        children={ formula }
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
      />
    </div>
  )
}

export default Blog