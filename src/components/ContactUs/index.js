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
import { FaLinkedinIn } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa"
import { IoCallOutline } from "react-icons/io5"
import { GiWorld } from 'react-icons/gi'
const ContactUs = () => {
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


            <img src='contactbanner.jpg' className='w-full ' />

            <div className='tablet:w-96 mobile:w-60 p-10   tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-40 bg-white rounded-[30px] text-center   text-[#292F36]'>
                <h1 className='tablet:text-4xl mobile:text-2xl font'>Contact Us</h1>
                <p>Home / Contact</p>
            </div>

            {/* ******************** section 1 ****************** */}
            <h1 className='tablet:w-[600px] tablet:mx-auto mobile:mx-5  text-[#292F36] font tablet:text-4xl mobile:text-2xl text-center mt-44 '>We love meeting new people and helping them.</h1>
            <div className='tablet:w-[900px] tablet:mx-auto mobile:mx-5 text-[#292F36] mt-10 tablet:flex' >
                <div className='bg-[#F4F0EC] tablet:w-60 h-80 pt-12 px-5 rounded-[40px]'>
                    <div className='flex gap-5 py-5'>
                        <FaRegEnvelope className='text-xl text-[#CDA274] ' />
                        <p className='text-sm'>info@yourdomain.com</p>
                    </div>
                    <div className='flex gap-5 py-5'>
                        <IoCallOutline className='text-xl text-[#CDA274] ' />
                        <p className='text-sm'>+1 (378) 400-1234</p>
                    </div>
                    <div className='flex gap-5 py-5'>
                        <GiWorld className='text-xl text-[#CDA274] ' />
                        <p className='text-sm'>www.yourdomain.com</p>
                    </div>
                    <div className='flex  text-[#292F36]  text-sm my-3  justify-between w-32'>
                        <FaFacebookF />
                        <BsTwitter />
                        <BiLogoLinkedin />
                        <FaInstagram />
                    </div>
                </div>
                <div className='tablet:w-[700px] tablet:mx-auto mobile:mx-5 '>
                    <div className='tablet:w-[87%] text-center '>
                        <div className='mt-5 grid tablet:grid-cols-2 mobile:grid-cols-1 gap-10 tablet:mx-5 mobile:mx-0'>
                            <input type='text' placeholder='Name' className='border-b-2 border-[#292F36] pb-2' />
                            <input type='Email' placeholder='Email' className=' border-b-2 border-[#292F36]  pb-2' />
                            <input type='text' placeholder='Website' className='border-b-2 border-[#292F36] pb-2' />
                            <input type='Email' placeholder='Phone' className=' border-b-2 border-[#292F36]  pb-2' />
                        </div>
                        <input type='text' placeholder='Hello I am Interested In' className='tablet:w-[96%] mobile:w-[90%] mt-5 pt-5 pb-20 border-[#292F36] border-b-2' />
                    </div>
                    <div className='flex justify-end tablet:w-[87%]'>
                        <button className='bg-[#292F36] rounded-xl ml-5 text-md flex justify-center w-40 py-4 mt-5 text-white '>Send Now &nbsp;<HiOutlineArrowNarrowRight className='text-2xl text-[#CDA274]' /></button>

                    </div>

                </div>
            </div>

            {/* ****************** section 2 ****************** */}

            <div className='tablet:w-[900px] mt-44 tablet:mx-auto mobile:mx-5 '>
                <img src="/Map.png" />
            </div>

             {/* ***************** footer *************** */}

             <div id="contact" className='tablet:w-[1000px] mt-40 text-[#292F36] mobile:mx-10 tablet:mx-auto mobile:space-y-10 tablet:space-y-0 grid laptop:grid-cols-5  tablet:grid-cols-3 '>
                <div className='laptop:col-span-2 tablet:w-80 '>
                    <div className='flex  '>
                        <img src='./logo.png' className='w-8 h-7 mt-2 mx-1' />
                        <h1 className=' text-4xl text-[#292F36] font'>Interno</h1>
                    </div>
                    <p className='py-4'>It is a long established fact that a reader will be distracted lookings.</p>
                    <div className='flex justify-between w-44'>
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
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold font'><h1 className=' text-2xl'>Services</h1></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Kitchen</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Living Area</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Bathroom</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Dinning Hall</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Bedroom</p></li>
                </div>
                <div className='list-none space-y-7 '>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold font' ><h1 className='font-semibold text-2xl'>Contact</h1></li>
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

export default ContactUs
