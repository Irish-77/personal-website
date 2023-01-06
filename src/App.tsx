// General Imports
import React from 'react'
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

// Import Pages
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Blog from './pages/Blog';
import BlogDisplay from './pages/BlogDisplay';
import CV from './pages/CV';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          
          <Route path="/cv" element={<CV />} />

          <Route path="/experience" element={<Landing />} />
    
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDisplay />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
