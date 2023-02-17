import React from 'react';

import Typical from 'react-typical';
import ParticlesBackground from '../components/ParticlesBackground';

import my_image from './../assets/landing/me.jpg';

import './../styles/Landing.css'



const steps = [
  'Student 👨🏻‍🎓', 2000,
  'Programmer 💻', 2000,
  'Data Scientist 🧮', 2000,
  'ML/AI-Enthusiast 🧠', 2000,
];

function Landing() {
  return (
    <div>

      {/* Main */}
      <div className="main-landing-container">
        <div className="wrapper">
          <div className="image-container">
            <img src={my_image} alt="Portfolio" className="personal-image" />
          </div>
          <div className="text-container">
            <h1 className="main-header">Hey, I'm Basti</h1>
            <p className="landing-intro">
              I'm a {" "}
              <Typical wrapper="b" steps={steps} loop={1} className="typical" />
            </p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Landing