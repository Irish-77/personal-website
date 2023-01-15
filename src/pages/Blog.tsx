import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';


import 'katex/dist/katex.min.css';

function Blog() {

  const formula =  `
  Given a **formula** below $$\\frac{1}{2}$$
  
  Calculate the value of $s$ when $u = 10\\frac{m}{s}$ and $a = 2\\frac{m}{s^{2}}$ at $$t = 1s$$

  // # 1


  ![](%%URL%%/project_image_pacman.jpeg)

  # 2
  <img src="%%URL%%/project_image_pacman.jpeg" alt="Text">


  `;

  return (


    <div>
      <ReactMarkdown
        children={ String(formula).replaceAll("%%URL%%", process.env.REACT_APP_BASE_URL) }
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
      />
    </div>
  )
}

export default Blog