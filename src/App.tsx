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
  console.log(process.env.REACT_APP_BASE_URL)
  return (
    <div className="App">
      <Router basename="/personal-website">
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
      </Router>
    </div>
  );
}

export default App;
