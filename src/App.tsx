// General Imports
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/personal-website/" element={<Landing />} />
          
          <Route path="/personal-website/projects" element={<Projects />} />
          <Route path="/personal-website/project/:id" element={<ProjectDisplay />} />
          
          <Route path="/personal-website/cv" element={<CV />} />

          <Route path="/personal-website/experience" element={<Landing />} />
    
          <Route path="/personal-website/blog" element={<Blog />} />
          <Route path="/personal-website/blog/:id" element={<BlogDisplay />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
