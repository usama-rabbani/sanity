'use client'
import { delay, motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'
import allproducts from './allproducts/page'
export default function Home() {
  return (
    <main className="">
      
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
   
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
     <motion.div  initial ={{x:100}} animate={{x:[0, 50, 0]}}  transition={{duration:"2"}}  whileHover={{ opacity:0.2 }}   transition={{ duration: 0.5 }}>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <Link href={'/allproducts'}>
          <li  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</li>
        </Link>
        <Link href={''}>
          <li  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</li>
        </Link>
        <Link href={''}>
          <li  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</li>
        </Link>
        <Link href={''}>
          <li  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</li>
        </Link>
        <Link href={''}>
          <li  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</li>
        </Link>
      </ul>
      </motion.div>
    </div>
   
  </div>
</nav>
<motion.div
      whileHover={{ scale: 1.5 }} // This scales the image on hover
      transition={{ duration: 0.5 }} // You can adjust the duration
      
    > 
      <img className="w-[200px] m-auto overflow-hidden" src="next.svg" alt="Image" />
    </motion.div>
    </main>
  )
}
