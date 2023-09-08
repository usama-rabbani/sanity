'use client'
import { JSX } from 'react';
import { delay, motion } from "framer-motion";
import Image from 'next/image'
import { FiMenu } from "react-icons/fi";
import Link from 'next/link'
import allproducts from './allproducts/page'
import { useState } from "react";
export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when the screen size is greater than or equal to 768px
  const closeMenuOnLargeScreen = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  // Attach closeMenuOnLargeScreen to window resize event
  window.addEventListener("resize", closeMenuOnLargeScreen);

  return (
   <>
 
<main className="items-center mx-auto max-w-screen-xl px-6 md:px-6">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
             Sanity.Io
            </span>
          </a>
          <div
            
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
           
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 cursor-pointer ${isMenuOpen ? "rotate-45" : "rotate-0"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link href={'/allproducts'}>
                <li
                 
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </li>
              </Link>
              <Link href={'/'}>
                <li
                  
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </li>
              </Link>
              <Link href={'/'}>
                <li
                  
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </li>
              </Link>
              <li>
                <li
                 
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </li>
              </li>
              <Link href={'/'}>
                <li
                 
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

<motion.div 
      whileHover={{ scale: 1.5 }} // This scales the image on hover
      transition={{ duration: 0.5 }} // You can adjust the duration
      
    > 
      <img className="w-[200px] m-auto overflow-hidden mt-36" src="next.svg" alt="Image" />
    </motion.div>
    </main>
    </>
  )
}
