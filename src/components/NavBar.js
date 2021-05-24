import React from 'react'
import logo from '../images/Logo.png'
import { NavLink } from 'react-router-dom'

export default function NavBar({ opaque }) {
    const opacityClasses = opaque ? "w-full bg-white rounded-xl shadow-lg" : "w-full bg-white opacity-80 rounded-xl shadow-lg";

  return (
    <header className="absolute z-20 top-0 w-full px-2 pt-2">
        <div className={opacityClasses}>
            <nav className="md:flex items-left py-1">
                <div className="md:hidden flex w-full">
                    <button className="text-db_blue-dark ml-3 focus:outline-none">
                        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </button>
                    <div className="flex-grow w-full flex justify-center">
                        <a href="#" className="py-1">
                            <img className="h-12" src={logo} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="hidden md:flex items-center container mx-auto text-db_blue-dark">
                    <NavLink exact to="/" className="m-1 mx-20 p-1">
                        <img className="h-16" src={logo} alt=""/>
                    </NavLink>
                    <NavLink exact to="/" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-4 hover:opacity-70">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-4 hover:opacity-70">
                        About us
                    </NavLink>
                    <NavLink to="/directory" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-4 hover:opacity-70">
                        Directory
                    </NavLink>
                    <NavLink to="/blog" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-4 hover:opacity-70">
                        Blog
                    </NavLink>
                    <NavLink to="/bbia" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-4 hover:opacity-70">
                        BBIA
                    </NavLink>
                </div>
            </nav>
        </div>
    </header>
    )
}