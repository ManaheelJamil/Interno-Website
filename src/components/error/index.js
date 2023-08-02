import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { useState, useEffect } from 'react';
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { FaAngleRight } from "react-icons/fa"
const Error = () => {
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
        <>
            {/* ************* navbar ************* */}

            <div className={`flex  justify-around tablet:w-full   py-5 top-0 left-0 right-0  fixed   mx-auto   ${scrolled ? 'bg-white' : 'bg-white'}`} class=' flex justify-around tablet:w-full relative  py-5'>
                <div className='flex '>
                    <img src='./logo.png' className='w-5 h-5 mt-2 mx-1' />
                    <h1 className='font text-2xl text-[#292F36] font-sans'>Interno</h1>
                </div>
                <div>
                    <ul class=' tablet:flex  mobile:hidden tablet:block tablet:space-x-5 laptop:space-x-10 text-[#292F36] font-semibold'>
                        <li className='hover:text-yellow-800'><a href="/">Home</a></li>
                        <li className='hover:text-yellow-800'><a href="/">Pages</a></li>
                        <li className='hover:text-yellow-800'><Link to='/services'>Services</Link></li>
                        <li className='hover:text-yellow-800'><Link to='/project'>Project</Link></li>
                        <li className='hover:text-yellow-800'><Link to='/Articles'>Blog</Link></li>
                        <li className='hover:text-yellow-800'><a href="/ContactUs">Contact</a></li>
                        <li className='text-2xl'><FiSearch /></li>
                    </ul>
                </div>

                <div className={`i ${isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'}`} onClick={toggleDropdown} >
                    <FaBars className='tablet:hidden mobile:block mt-2' />
                </div>
                {isOpen && (
                    <div className='absolute w-[100vw]  list-none open tablet:hidden mobile:block  bg-white mt-10   space-y-4 py-10 text-[#292F36] content-center	 text-center  tablet:space-x-5 laptop:space-x-10  font-semibold'>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#">Home</a></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#pages">Pages</a></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><Link to='/services'>Services</Link></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><Link to='/project'>Project</Link></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><Link to='/Articles'>Blog</Link></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="/ContactUs">Contact</a></li>
                    </div>)}
            </div>

            {/* **************** section 1 ****************** */}

            <div className=' tablet:w-[900px]  mobile:mx-5 tablet:mx-auto  tablet:flex'>

                <div className='tablet:mt-20'>
                    <h1 className='text-[#CDA274] text-[200px] font-bold font'>404</h1>
                    <p className='font text-2xl mt-[-10%]   tablet:w-96'>We are sorry, but the page
                        you requested was not found</p>
                    <button className='bg-[#292F36] rounded-xl  text-sm flex justify-center w-44 py-4 mt-5 text-white '>Back To Home&nbsp;<HiOutlineArrowNarrowRight className='text-2xl text-[#CDA274]' /></button>

                </div>
                <div>
                    <img src='error.png' className=' mobile:mt-10 tablet:w-[700px]' />
                </div>
            </div>
        </>
    )
}

export default Error
