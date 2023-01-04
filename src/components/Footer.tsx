// General Imports
import React from 'react'

// Import Components
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

// Styles
import '../styles/Footer.css';



function Footer() {
  return (
    <div className="footer">
      <div className="SocialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <GitHubIcon />
        <EmailIcon />
      </div>
      <p> &copy; 2022 berle.com</p>
    </div>
  )
}

export default Footer