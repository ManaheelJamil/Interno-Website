import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import LazyLoad from 'react-lazyload';
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [Open, setOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="py-5 top-0 left-0 right-0  fixed   mx-auto flex justify-around  bg-white tablet:w-full    ">
            <div className='flex '>
                <img src='./logo.jpeg' className='w-5 h-5 mt-2 mx-1' />
                <h1 className='font-bold text-2xl text-[#292F36] font-sans'>Interno</h1>
            </div>
            <div>
                <ul class=' tablet:flex  mobile:hidden tablet:block tablet:space-x-5 laptop:space-x-10 text-[#292F36] font-semibold'>
                    <li className='hover:text-yellow-800'><Link to="/">Home</Link></li>
                    <li className='hover:text-yellow-800'><Link to='/services'>Services</Link></li>
                    <li className='hover:text-yellow-800'><Link to='/project'>Project</Link></li>
                    <li className='hover:text-yellow-800'><Link to='/Articles'>Blog</Link></li>
                    <li className='hover:text-yellow-800'><Link to="/ContactUs">Contact</Link></li>
                    <li className='text-2xl'><FiSearch /></li>
                </ul>
            </div>

            <div className={`i ${isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'}`} onClick={toggleDropdown} >
                <FaBars className='tablet:hidden mobile:block mt-2' />
            </div>
            {isOpen && (
                <div className='absolute w-[100vw]  list-none open tablet:hidden mobile:block  bg-white mt-10   space-y-4 py-10 text-[#292F36] content-center	 text-center  tablet:space-x-5 laptop:space-x-10  font-semibold'>
                    <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><Link to="/">Home</Link></li>
                    <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><Link to='/services'>Services</Link></li>
                    <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><Link to='/project'>Project</Link></li>
                    <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><Link to='/Articles'>Blog</Link></li>
                    <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><Link to="/ContactUs">Contact</Link></li>
                </div>)}
        </div>
    )
}

export default Navbar