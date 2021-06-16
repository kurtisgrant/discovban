import React, { useState } from 'react'
import logo from '../images/Logo.png'
import { NavLink } from 'react-router-dom'

export default function NavBar({ transparent }) {
    const opacityClasses = !transparent ? "w-full bg-white rounded-xl shadow-xl" : "w-full bg-white opacity-80 rounded-xl shadow-xl";
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const hamClasses = `${hamburgerOpen ? 'tham-active' : ''} tham tham-e-squeeze tham-w-6`;
    const drawerClasses = `${hamburgerOpen ? 'h-42' : 'h-0'} bg-white rounded-lg text-db_blue transition-height duration-500 ease-in-out`;
    const drawerInsideClasses = `${hamburgerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} flex flex-col items-left p-2 pl-6 text-db_blue transition-opacity duration-500 delay-300 ease-in-out`;
    const handleToggleHam = () => setHamburgerOpen(!hamburgerOpen);
    

  return (
    <header className="fixed z-20 top-0 w-full px-2 pt-2">
        <div className={opacityClasses}>
            <nav className="flex items-left py-1">
                <div className="md:hidden w-full">
                    <div className="flex items-center w-full">
                        <button onClick={handleToggleHam} className="text-db_blue-dark p-4 focus:outline-none">
                            <div className={hamClasses}>
                                <div className="tham-box">
                                    <div className="tham-inner" />
                                </div>
                            </div>
                        </button>
                        <div className="flex-grow w-full flex justify-center">
                            <NavLink  exact to="/" className="py-1 pr-16">
                                <img className="h-12" src={logo} alt=""/>
                            </NavLink>
                        </div>
                    </div>
                    <div className={drawerClasses}>
                        <div className={drawerInsideClasses}>
                            <NavLink exact to="/" activeClassName='font-extrabold' className="text-lg font-semibold cursor-pointer whitespace-nowrap my-2">
                                Home
                            </NavLink>
                            <NavLink to="/directory" activeClassName='font-extrabold' className="text-lg font-semibold cursor-pointer whitespace-nowrap my-2">
                                Businesses & Services
                            </NavLink>
                            <NavLink to="/attractions" activeClassName='font-extrabold' className="text-lg font-semibold cursor-pointer whitespace-nowrap my-2">
                                Attractions
                            </NavLink>
                            <NavLink to="/bbia" activeClassName='font-extrabold' className="text-lg font-semibold cursor-pointer whitespace-nowrap my-2">
                                BBIA
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex justify-evenly container mx-auto text-db_blue-dark">
                    <NavLink exact to="/" className="m-1 p-1">
                        <img className="h-16 hover:opacity-70" src={logo} alt=""/>
                    </NavLink>
                    <div className="flex justify-between align-center align-center items-center">
                        <NavLink exact to="/" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-3 hover:opacity-70">
                            Home
                        </NavLink>
                        <NavLink to="/directory" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-3 hover:opacity-70">
                            Businesses & Services
                        </NavLink>
                        <NavLink to="/attractions" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-3 hover:opacity-70">
                            Attractions
                        </NavLink>
                        <NavLink to="/bbia" activeClassName='font-semibold' className="text-lg cursor-pointer whitespace-nowrap mx-3 hover:opacity-70">
                            BBIA
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    )
}