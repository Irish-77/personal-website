"use client";

import Link from 'next/link';
import { useState } from 'react';
import ThemeSwitcher from '@/app/ThemeSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white dark:bg-inherit shadow-md dark:shadow-slate-900 shadow-slate-50 backdrop-filter backdrop-blur-md bg-opacity-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">Home</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/cv" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">CV</Link>
                <Link href="/projects" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
                <Link href="/blog" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <ThemeSwitcher />
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 dark:bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white dark:hover:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white dark:focus:ring-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/cv" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">CV</Link>
          <Link href="/projects" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
          <Link href="/blog" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;