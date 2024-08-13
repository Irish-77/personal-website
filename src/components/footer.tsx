"use client";

import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

import { siteConfig } from '@/config/site';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <footer className="bg-white dark:bg-inherit py-8 mt-auto shadow-md dark:shadow-white shadow-slate-600"> {/* mt-auto makes the footer stick to the bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-sm">Machine learning enthusiast with expertise in computer vision, combining theoretical concepts with practical industry experience.</p>
          </div>
          {/* Second column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-sm hover:text-gray-400">Blog</a></li>
              <li><a href="/cv" className="text-sm hover:text-gray-400">CV</a></li>
              <li><a href="/projects" className="text-sm hover:text-gray-400">Projects</a></li>
            </ul>
          </div>
          {/* Third column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex items-center space-x-4">
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                <FaGithub
                  size={24}
                  className={`transition-colors duration-300 ${isHovered ? 'text-gray-400 hover:text-gray-100' : 'text-gray-200 hover:text-gray-400'}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </a>
              <a href={siteConfig.links.linkedIn} target="_blank" rel="noopener noreferrer">
                <FaLinkedin
                  size={24}
                  className={`transition-colors duration-300 ${isHovered ? 'text-gray-400 hover:text-gray-100' : 'text-gray-200 hover:text-gray-400'}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </a>
            <GrInstagram
              size={24}
              className={`transition-colors duration-300 ${isHovered ? 'text-gray-400 hover:text-gray-100' : 'text-gray-200 hover:text-gray-400'}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </div>
    </div>
    </footer >
  );
};

export default Footer;