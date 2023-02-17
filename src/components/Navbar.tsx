// General Imports
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import Components
import ReorderIcon from '@material-ui/icons/Reorder';
// Styles
import '../styles/Navbar.css';



function Navbar() {

  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);


  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="nb-toggle-button">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="nb-links">
        <Link className="nb-link" to="/"> Home </Link>
        <Link className="nb-link" to="/projects"> Projects </Link>
        <Link className="nb-link" to="/cv"> CV </Link>
        <Link className="nb-link" to="/blog"> Blog </Link>
      </div>
    </div>
  )
}

export default Navbar;