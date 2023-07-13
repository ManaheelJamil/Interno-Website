import React from 'react'
import {FiSearch} from "react-icons/fi"
import {FaBars} from "react-icons/fa"
import { useState , useEffect  } from 'react';
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
    <>
 <div className={`flex  justify-around tablet:w-full   py-5 top-0 left-0 right-0  fixed   mx-auto   ${scrolled ? 'bg-white' : 'bg-white'}`}class=' flex justify-around tablet:w-full relative  py-5'>
    <div className='flex '>
        <img src='./logo.png' className='w-5 h-5 mt-2 mx-1'/>
        <h1 className='font-bold text-2xl text-[#292F36] font-sans'>Interno</h1>
    </div>
    <div>
        <ul class=' tablet:flex  mobile:hidden tablet:block tablet:space-x-5 laptop:space-x-10 text-[#292F36] font-semibold'>
            <li className='hover:text-yellow-800'><a href="#">Home</a></li>
            <li className='hover:text-yellow-800'><a href="#pages">Pages</a></li>
            <li className='hover:text-yellow-800'><a href="#services">Services</a></li>
            <li className='hover:text-yellow-800'><a href="#project">Project</a></li>
            <li className='hover:text-yellow-800'><a href="#blog">Blog </a></li>
            <li className='hover:text-yellow-800'><a href="#contact">Contact</a></li>
            <li className='text-2xl'><FiSearch/></li>
        </ul>
    </div>
   
    <div className={`i ${isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'}`} onClick={toggleDropdown} >
        <FaBars className='tablet:hidden mobile:block mt-2'/>
    </div>
    {isOpen && (
    <div className='absolute w-[100vw]  list-none open tablet:hidden mobile:block  bg-white mt-10   space-y-4 py-10 text-[#292F36] content-center	 text-center  tablet:space-x-5 laptop:space-x-10  font-semibold'>
            <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#">Home</a></li>
            <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#pages">Pages</a></li>
            <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#services">Services</a></li>
            <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#project">Project</a></li>
            <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#blog">Blog </a></li>
            <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#contact">Contact</a></li>
    </div>)}
 </div>
 </>
  )
}

export default Navbar