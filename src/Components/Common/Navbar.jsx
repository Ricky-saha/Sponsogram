import React, { useState } from 'react'
import Logo from '../../assets/Sponsogram.png'
import search from '../../assets/Vector.png'
import { NavbarLinks } from '../../data/Navlinks'
import { Link, matchPath, useLocation } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

    return (
        <div className="sticky top-0 z-50 bg-white border-b-[1px] border-b-richblack-700">
            <div className="flex h-14 items-center justify-between px-4 md:px-8 lg:px-12 max-w-maxContent mx-auto">
                {/* Logo */}
                <Link to="/">
                    <img src={Logo} alt="logo" className="w-32 md:w-40" loading='lazy'/>
                </Link>

                {/* Desktop NavLinks */}
                <nav className="hidden md:block">
                    <ul className="flex gap-x-6 text-richblack-25 font-bold">
                        {NavbarLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link?.path}>
                                    <p className={`${matchRoute(link?.path) ? "text-custom-green underline-link" : "text-richblack-25"}`}>
                                        {link.title}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Search box - hidden on mobile */}
                <div className="hidden md:block">
                    <form className="flex items-center">
                        <input type="text" placeholder="Search" className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 lg:w-64"/>
                        <img src={search} alt="searchlogo" className="ml-[-30px]"/>
                    </form>
                </div>

                {/* Mobile menu button */}
                <button 
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white py-2 px-4">
                    <ul className="flex flex-col gap-y-2">
                        {NavbarLinks.map((link, index) => (
                            <li key={index}>
                                <Link 
                                    to={link?.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block py-2 ${matchRoute(link?.path) ? "text-custom-green underline-link" : "text-richblack-25"}`}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <form className="mt-4">
                        <input type="text" placeholder="Search" className="w-full px-4 py-2 border border-gray-300 rounded-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Navbar
