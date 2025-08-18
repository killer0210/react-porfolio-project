import React, { useState } from 'react'
import { Link } from "react-router-dom";
function Navigation() {
    return (
        <ul className='nav-ul'>
            <li className='nav-li'>
                <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className='nav-li'>
                <Link className='nav-link' to="/about">About</Link>
            </li>
            <li className='nav-li'>
                <Link className='nav-link' to="/projects">Projects</Link>
            </li>
            <li className='nav-li'>
                <Link className='nav-link' to="/products">Products</Link>
            </li>
            <li className='nav-li'>
                <Link className='nav-link' to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='fixed inset-x-0  z-20 w-full backdrop-blur-lg  bg-primary/40'>
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a href="#" className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>My Portfolio</a>
                    <button onClick={() => setIsOpen(!isOpen)} className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden' >
                        <img src={isOpen ? "/src/assets/close.svg" : "/src/assets/menu.svg"} alt="toggle" className='w-6 h-6' /></button>
                    <nav className='hidden sm:flex'><Navigation /></nav>
                </div>
                {isOpen && (<div className='block overflow-hidden text-center sm:hidden'>
                    <nav className='pb-5'><Navigation /></nav>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar