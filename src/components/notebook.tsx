"use client";

import React, { useEffect, useState } from "react";
import { IpynbRenderer } from "react-ipynb-renderer-katex";
import 'katex/dist/katex.min.css';

// import "react-ipynb-renderer/dist/styles/oceans16.css"; // For dark mode
// import "react-ipynb-renderer/dist/styles/default.css"; // For light mode
import "../styles/jupyter-light.css";
import "../styles/jupyter-dark.css";

interface NotebookProps {
  filePath: string;
}

export const Notebook: React.FC<NotebookProps> = ({ filePath }) => {
  const [ipynbContent, setIpynbContent] = useState<any>(null);
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const fetchIpynb = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Failed to fetch notebook: ${response.statusText}`);
        }
        const ipynb = await response.json();
        setIpynbContent(ipynb);
      } catch (error) {
        console.error("Error fetching the notebook:", error);
      }
    };

    if (filePath) {
      fetchIpynb();
    }
  }, [filePath]);

//   useEffect(() => {
// 	const loadThemeStyles = async () => {
// 	  if (theme === "dark") {
// 		await import("react-ipynb-renderer-katex/dist/styles/oceans16.css");
// 	  } else {
// 		await import("react-ipynb-renderer-katex/dist/styles/default.css");
// 	  }
// 	};
  
// 	loadThemeStyles();
//   }, [theme]);

  return (
    <div className="!px-0 !mx-auto" >
      {ipynbContent ? <IpynbRenderer ipynb={ipynbContent} /> : <p>Loading...</p>}
    </div>
  );
};

export default Notebook;