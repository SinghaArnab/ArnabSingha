import React, { useState } from 'react'
import { Outlet} from 'react-router-dom'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between   flex-col lg:flex-row">
          <div className="w-full relative flex justify-center lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href='#none' >
            <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#none">
              Arnab&nbsp; <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Singha</span>
           </a>
            </a>
            <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)} >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className={"lg:flex flex-grow items-center justify-center pb-4 " + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger" >
          <div className='flex justify-center items-center'>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item subnavitems">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href='#Home' onClick={() => setNavbarOpen(!navbarOpen)} >
                  <i className="fa-solid fa-hourglass-half text-lg leading-lg text-white"></i><span className="ml-2 inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">
                  Home</span>
                </a>
              </li>
              <li className="nav-item subnavitems">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href='#pro' onClick={() => setNavbarOpen(!navbarOpen)}>
                  <i className="fa-solid fa-calendar-day text-lg leading-lg text-white"></i><span className="ml-2 inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">
                  Projects</span>
                </a>
              </li>
              <li className="nav-item subnavitems">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href='#skills' onClick={() => setNavbarOpen(!navbarOpen)}>
                  <i className="fa-solid fa-calendar-day text-lg leading-lg text-white"></i><span className="ml-2 inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">
                  About</span>
                </a>
              </li>
              <li className="nav-item subnavitems" >
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href='#cont' onClick={() => setNavbarOpen(!navbarOpen)}>
                  <i className="fa-solid fa-calendar-day text-lg leading-lg text-white "></i><span className="ml-2 inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">
                  Contact</span>
                </a>
              </li>

            </ul>
            
            </div>
            
          </div>
          <div className={`flex justify-center items-center pr-4 ${navbarOpen ? 'block lg:block':"hidden lg:block"}`}>
            <button className='h-[20px] w-[11rem] inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center md:h-auto md:p-4 transform hover:scale-110 duration-300 ease-in-out  border-4 border-sky-500 pt-3 pb-[1.75rem]'>
            Download CV</button>
            </div>
        </div> 
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar