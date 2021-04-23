import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="absolute top-0 w-full z-20">
        <nav className="container buffer-1 md:buffer-2 mx-auto">
            <div className="md:flex items-left py-4">
                <div className="flex justify-between items-center">
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none">
                            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                    
                </div>
                <div className="hidden md:flex items-center text-white">
                    <NavLink exact to="/" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-3 hover:opacity-70">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-3 hover:opacity-70">
                        About us
                    </NavLink>
                    <NavLink to="/business" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-3 hover:opacity-70">
                        Businesses
                    </NavLink>
                    <NavLink to="/blog" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-3 hover:opacity-70">
                        Blog
                    </NavLink>
                </div>
            </div>
        </nav>
    </header>
  // <div className='m-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg'>
  //   <nav className='text-white font-light w-4/5 flex justify-around mx-auto'>
  //     <NavLink exact to='/' activeClassName='font-semibold' className='whitespace-nowrap mx-1 px-3 py-2 hover:opacity-60'>
  //       Home
  //     </NavLink>
  //     <NavLink to='/about' activeClassName='font-semibold' className='whitespace-nowrap mx-1 px-3 py-2 hover:opacity-60'>
  //       About
  //     </NavLink>
  //     <NavLink to='/business' activeClassName='font-semibold' className='whitespace-nowrap mx-1 px-3 py-2 hover:opacity-60'>
  //       Business Directory
  //     </NavLink>
  //     <NavLink to='/blog' activeClassName='font-semibold' className='whitespace-nowrap mx-1 px-3 py-2 hover:opacity-60'>
  //       Blog
  //     </NavLink>
  //   </nav>
  // </div>
    )
}