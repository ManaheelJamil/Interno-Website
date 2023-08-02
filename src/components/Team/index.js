import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
// import { IoCallOutline } from "react-icons/io5"
// import { HiOutlineArrowNarrowRight } from "react-icons/hi"
// import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { Link } from 'react-router-dom';
import {FaLinkedinIn} from "react-icons/fa"

const Team = () => {
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
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="/">Home</a></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="/">Pages</a></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><Link to='/services'>Services</Link></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><Link to='/project'>Project</Link></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><Link to='/Articles'>Blog</Link></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="/ContactUs">Contact</a></li>
                    </div>)}
            </div>

            {/* *********** hero section ************** */}


            <img src='team.png' className='w-full ' />

            <div className='tablet:w-96 mobile:w-60 p-10   tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-40 bg-white rounded-[30px] text-center   text-[#292F36]'>
                <h1 className='tablet:text-4xl mobile:text-2xl font'>Our Professional</h1>
                <p>Home / Team</p>
            </div>

            {/* ********************* sectiion 1 ******************0 */}

            <div className='tablet:w-[900px]  tablet:mx-auto mobile:mx-16 mt-40 grid laptop:grid-cols-4 gap-10 tablet:grid-cols-3 '>
                <div className='text-center tablet:w-48  '>
                <Link to="/TeamDetail1">   <img src="Image (7).png" className='tablet:w-48 tablet:h-72' />
                   <div className='mobile:w-72 tablet:w-48'>
                   <h1 className='text-2xl font mt-2 text-[#292F36]'>Charlotte Levi</h1>
                    <p className='text-sm'>Design , Australia</p>
                    <div className='flex  text-[#292F36]  text-sm my-3  justify-center mt-2 gap-10'>
                        <FaFacebookF />
                        <BsTwitter />
                    </div>
                    </div> 
                    </Link>
                </div>
                <div className='text-center tablet:w-48'>
                <Link to="/TeamDetail2">   <img src="image 2.png" className='tablet:w-48 tablet:h-72 mobile:w-72 mobile:h-96' />
                <div className='mobile:w-72 tablet:w-48 '>   <h1 className='text-xl font mt-2 text-[#292F36]'>Nattasha Julie</h1>
                    <p className='text-sm'>Design , Australia</p>
                    <div className='flex   text-[#292F36]  text-sm my-3 justify-center mt-2 gap-5'>
                        <FaFacebookF />
                        <BsTwitter />
                        <FaLinkedinIn/>
                    </div>
                    </div>
                    </Link>
                </div>

                <div className='text-center tablet:w-48'>
                  <Link to="/TeamDetail3"> <img src="third.png" className='tablet:w-48 tablet:h-72 mobile:w-72 mobile:h-96 rounded-3xl' />
                  <div className='mobile:w-72 tablet:w-48 '>  <h1 className='text-xl font mt-2 text-[#292F36]'>John Smith</h1>
                    <p className='text-sm'>Design , Australia</p>
                    <div className='flex  text-[#292F36]  text-sm my-3  justify-center mt-2 gap-10'>
                        <FaFacebookF />
                        <BsTwitter />
                    </div>
                    </div>
                    </Link> 
                </div>
                <div className='text-center tablet:w-48'>
                    <Link to="/TeamDetail4"> <img src="image 3.png" className='tablet:w-48 tablet:h-72 mobile:w-72 mobile:h-96' />
                    <div className='mobile:w-72 tablet:w-48 '>   <h1 className='text-xl font mt-2 text-[#292F36]'>Nora Owen</h1>
                    <p className='text-sm'>Design , Australia</p>
                    <div className='flex  text-[#292F36]  text-sm my-3  justify-center mt-2 gap-10'>
                        <FaFacebookF />
                        <BsTwitter />
                    </div>
                    </div>
                    </Link>
                </div>
                <div className='text-center tablet:w-48'>
                    <Link to="/TeamDetail5"> <img src="fifth.jpg" className='tablet:w-48 tablet:h-72 mobile:w-72 mobile:h-96 rounded-3xl' />
                    <div className='mobile:w-72 tablet:w-48 '>   <h1 className='text-xl font mt-2 text-[#292F36]'>Sofia Carter</h1>
                    <p className='text-sm'>Design , Australia</p>
                    <div className='flex   text-[#292F36]  text-sm my-3 justify-center mt-2 gap-10'>
                        <FaFacebookF />
                        <BsTwitter />
                    </div>
                    </div>
                    </Link>
                </div>
                <div className='text-center tablet:w-48'>
                    <Link to="/TeamDetail6"> <img src="sixth.jpg" className='tablet:w-48 tablet:h-72 mobile:w-72 mobile:h-96 rounded-3xl' />
                    <div className='mobile:w-72 tablet:w-48 '>   <h1 className='text-xl font mt-2 text-[#292F36]'>Avery Jackson</h1>
                    <p className='text-sm'>Design , Australia</p>
                    <div className='flex  text-[#292F36]  text-sm my-3  text-[#292F36] justify-center mt-2 gap-5'>
                        <FaFacebookF />
                        <BsTwitter />
                        <FaLinkedinIn/>
                    </div>
                    </div>
                    </Link>
                </div>

                <div className='text-center tablet:w-48'>
                    <Link to="/TeamDetail7"> <img src="seventh.jpg" className='tablet:w-48 tablet:h-72 mobile:w-72 mobile:h-96 rounded-3xl' />
                    <div className='mobile:w-72 tablet:w-48 '>  <h1 className='text-xl font mt-2 text-[#292F36]'>Luna James</h1>
                    <p className='text-sm'>Design , Australia</p>
                    <div className='flex  text-[#292F36]  text-sm my-3  justify-center mt-2 gap-10'>
                        <FaFacebookF />
                        <BsTwitter />
                    </div>
                    </div>
                    </Link>
                </div>
                <div className='text-center tablet:w-48'>
                    <Link to="/TeamDetail8"> <img src="eight.jpg" className='tablet:w-48 tablet:h-72 mobile:w-72 mobile:h-96 rounded-3xl' />
                    <div className='mobile:w-72 tablet:w-48 '>    <h1 className='text-xl font mt-2 text-[#292F36]'>Gianna Mateo</h1>
                    <p className='text-sm'>Design , Australia</p>
                    <div className='flex   text-[#292F36]  text-sm my-3 justify-center mt-2 gap-10'>
                        <FaFacebookF />
                        <BsTwitter />
                    </div>
                    </div>
                    </Link>
                </div>
            </div>

{/* *************** footer ***************** */}

            <div id="contact" className='tablet:w-[900px] mt-40 text-[#292F36] mobile:mx-10 tablet:mx-auto mobile:space-y-10 tablet:space-y-0 grid laptop:grid-cols-5  tablet:grid-cols-3 '>
                <div className='laptop:col-span-2 tablet:w-80 '>
                    <div className='flex  '>
                        <img src='./logo.png' className='w-8 h-7 mt-2 mx-1' />
                        <h1 className='font-bold text-4xl text-[#292F36] font-sans'>Interno</h1>
                    </div>
                    <p className='py-4'>It is a long established fact that a reader will be distracted lookings.</p>
                    <div className='flex  text-[#292F36]  text-sm my-3  justify-between w-44'>
                        <FaFacebookF />
                        <BsTwitter />
                        <BiLogoLinkedin />
                        <FaInstagram />
                    </div>
                </div>

                <div className='list-none space-y-7 tablet:ml-20 laptop:ml-0 '>
                <li className='hover:text-yellow-900 cursor-pointer font'><h1 className=' text-2xl'>Pages</h1></li>
          <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><Link to='/about'>About Us</Link></li>
          <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><Link to='/project'> Our Project</Link></li>
          <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><Link to='/team'>Our Team</Link></li>
          <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><Link to='/ContactUs'>ContactUs</Link></li>
          <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><Link to='/services'>Services</Link></li>
                </div>
                <div className='list-none space-y-7 '>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><h1 className='font-bold text-2xl'>Services</h1></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Kitchen</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Living Area</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Bathroom</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Dinning Hall</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Bedroom</p></li>
                </div>
                <div className='list-none space-y-7 '>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold' ><h1 className='font-bold text-2xl'>Contact</h1></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold' ><p> 55 East Birchwood Ave. Brooklyn, New York 11201</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold' ><p> contact@interno.com</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold' ><p>(123) 456 - 7890</p></li>
                </div>
            </div>

            <p class=" mt-32 flex justify-center text-[#292F36]  mx-auto">2023<AiOutlineCopyrightCircle className='text-[#292F36]  px-1 text-2xl' />
                All rights reserved by<a href="https://mayonity.com/" className='text-[#292F36]  font-bold ml-3' target='_blank'>Mayonity</a></p>
        </>
    )
}

export default Team