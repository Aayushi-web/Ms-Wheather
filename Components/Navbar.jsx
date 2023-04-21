import React from 'react'
import Link from 'next/link';
const Navbar = () => {


  return (
    <header className="text-gray-600 body-font bg-gradient-to-r from-blue-100 via-blue-300 to-yellow-20 shadow-lg shadow-blue-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Ms.Weather</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
          <Link href={'/About'} className="mr-5 hover:text-gray-900">About Us</Link>
          <Link href={'/Contact'} className="mr-5 hover:text-gray-900">Contact</Link>
          <Link href={'/Wheather'} className="mr-5 hover:text-gray-900">Wheather</Link>
        </nav>
        <div className='flex space-x-5'>
          <Link href={"/Login"} className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded ">Login</Link>
          <Link href={"/Sign"} className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Sign up</Link>
        </div></div>
    </header>
  )

}

export default Navbar
