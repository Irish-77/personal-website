// General Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Import Components
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
// import EmailIcon from '@material-ui/icons/Email';

// Styles
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer" style={{ userSelect: "none" }}>

      <div className="ft-container">
        <div className="ft-row">
          <div className="ft-col">
            <h4>Links</h4>
            <ul>
              <li><Link to="/cv"> My CV </Link></li>
              <li><Link to="/projects"> Projects </Link></li>
              <li><Link to="/blog"> Blog </Link></li>
            </ul>
          </div>
          <div className="ft-col" >
            <h4>Impressum</h4>
            <ul unselectable="on">
              <li> Bastian Berle </li>
              <li> Germany</li>
            </ul>
          </div>
          <div className="ft-col">
            <h4>follow me</h4>
            <div className="ft-social-links">
              <a href="https://www.instagram.com/bastiberle/"><InstagramIcon className="ft-social-icon"/> </a>
              <a href="https://twitter.com/BastianBerle"><TwitterIcon className="ft-social-icon"/> </a>
              <a href="https://www.linkedin.com/in/bastian-berle/"><LinkedInIcon className="ft-social-icon"/> </a>
              <a href="https://github.com/Irish-77"><GitHubIcon className="ft-social-icon"/> </a>
              {/* <a href="#"><EmailIcon className="ft-social-icon"/> </a> */}
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Footer