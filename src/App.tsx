// General Imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Blog from './pages/Blog';
import BlogDisplay from './pages/BlogDisplay';
import CV from './pages/CV';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Services
import ScrollToTop from './services/ScrollToTop';

// Styles
import './App.css';

function App() {

  return (
    <div className="App">
      {/* <Router basename="/personal-website"> */}
      <Router>
        <ScrollToTop>
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
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
