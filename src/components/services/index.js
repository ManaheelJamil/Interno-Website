import React from 'react'
import { useState, useEffect } from 'react';
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { Link } from 'react-router-dom';
const Services = () => {
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

            {/* ***************** navbar ***************** */}
            <div className={`flex  justify-around tablet:w-full   py-5 top-0 left-0 right-0  fixed   mx-auto   ${scrolled ? 'bg-white' : 'bg-white'}`} class=' flex justify-around tablet:w-full relative  py-5'>
                <div className='flex '>
                    <img src='./logo.png' className='w-5 h-5 mt-2 mx-1' />
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
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#services">Services</a></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#project">Project</a></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#blog">Blog </a></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#contact">Contact</a></li>
                    </div>)}
            </div>

            {/* *************** hero section ********************* */}

            <img src='banner2.png' />

            <div className='tablet:w-96 mobile:w-60 p-10   tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-20 bg-white rounded-[30px] text-center   text-[#292F36]'>
                <h1 className='tablet:text-4xl mobile:text-2xl font-semibold'>Services</h1>
                <p>Home / Services</p>
            </div>

            {/* ************** section 1 ******************* */}

            <div className='laptop:w-[900px] tablet:w-[600px] tablet:gap-20 mobile:gap-5 mx-auto grid laptop:grid-cols-3 tablet:grid-cols-2  justify-center mt-32'>

                <div className='w-72 px-10 h-64 pt-10 hover:bg-[#F4F0EC]  cursor-pointer hover:rounded-[30px] text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                    <Link to='/ServiceSample'> <h1 className='text-xl font-bold text-[#292F36]'>Project Plan</h1>
                        <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                            available, majority.</p>
                        <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>
                    </Link>
                </div>

                <div className='w-72 px-10 h-64 pt-10 hover:bg-[#F4F0EC]  cursor-pointer hover:rounded-[30px] text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                    <Link to='/ServiceSample'>   <h1 className='text-xl font-bold text-[#292F36]'>Interior Work</h1>
                        <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                            available, majority.</p>
                        <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>
                    </Link>
                </div>
                <div className='w-72 px-10 h-64 pt-10 hover:bg-[#F4F0EC]  cursor-pointer hover:rounded-[30px] text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                    <Link to='/ServiceSample'>
                        <h1 className='text-xl font-bold text-[#292F36]'>Realization</h1>
                        <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                            available, majority.</p>
                        <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>
                    </Link>
                </div>
                <div className='w-72 px-10 h-64 pt-10 hover:bg-[#F4F0EC]  cursor-pointer hover:rounded-[30px] text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                    <Link to='/ServiceSample'> <h1 className='text-xl font-bold text-[#292F36]'>2D/ 3D Art Work</h1>
                        <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                            available, majority.</p>
                        <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>
                    </Link>
                </div>
                <div className='w-72 px-10 h-64 pt-10 hover:bg-[#F4F0EC]  cursor-pointer hover:rounded-[30px] text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                    <Link to='/ServiceSample'>   <h1 className='text-xl font-bold text-[#292F36]'>Interior Work</h1>
                        <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                            available, majority.</p>
                        <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>
                    </Link>
                </div>
                <div className='w-72 px-10 h-64 pt-10 hover:bg-[#F4F0EC]  cursor-pointer hover:rounded-[30px] text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                    <Link to='/ServiceSample'>   <h1 className='text-xl font-bold text-[#292F36]'>Decoration Work</h1>
                        <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                            available, majority.</p>
                        <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>
                    </Link>
                </div>
            </div>

            {/* ************** section 2 ******************* */}

            <div className='bg-[#F4F0EC]  mt-44 mx-auto rounded-[50px] tablet:w-[1000px]' >

                <h1 className='text-4xl font-bold text-center text-[#292F36] pt-32'>How We Work</h1>
                <p className='text-[#292F36] tablet:mx-44 mobile:mx-5 mobile:text-center mt-5'>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className='flex tablet:w-[800px] tablet:mt-40 mobile:flex-col-reverse tablet:flex-row mobile:mt-40 mobile:mx-5 justify-between tablet:mx-auto'>
                    <div>
                        <img src="Image.png" className='w-[350px] rounded-[30px] tablet:mt-0 mobile:mt-20' />
                    </div>
                    <div className='tablet:w-96 mt-10'>
                        <div className='flex justify-between'>
                            <img src='logo1.png' className='w-24' />
                            <h1 className='text-8xl text-white font-bold'>01</h1>
                        </div>
                        <h1 className='text-3xl mt-20 font-bold'>Concept & Details</h1><p className='py-3'>It is a long established fact  will be distracted.
                            Lorem Ipsum is simply dummy from text of the
                            and typesetting indufstry. </p>
                    </div>
                </div>


                <div className='tablet:flex tablet:w-[800px] tablet:mt-40 mobile:mt-40 mobile:mx-5 justify-between tablet:mx-auto'>
                    <div className='tablet:w-96 mt-10'>
                        <div className='flex justify-between'>
                            <img src='icon.png' className='w-24' />
                            <h1 className='text-8xl text-white font-bold'>02</h1>
                        </div>
                        <h1 className='text-3xl mt-20 font-bold'>Idea for Work</h1><p className='py-3'>It is a long established fact  will be distracted.
                            Lorem Ipsum is simply dummy from text of the
                            and typesetting indufstry. </p>
                    </div>
                    <div>
                        <img src="Image (1).png" className='w-[350px] rounded-[30px] tablet:mt-0 mobile:mt-20' />
                    </div>
                </div>




                <div className='flex tablet:w-[800px] tablet:mt-40 mobile:mt-40  mobile:flex-col-reverse tablet:flex-row  mobile:mx-5 justify-between tablet:mx-auto'>
                    <div>
                        <img src="Image (2).png" className='w-[350px] rounded-[30px] tablet:mt-0 mobile:mt-20' />
                    </div>
                    <div className='tablet:w-96 mt-10'>
                        <div className='flex justify-between'>
                            <img src='Icon (1).png' className='w-24' />
                            <h1 className='text-8xl text-white font-bold'>03</h1>
                        </div>
                        <h1 className='text-3xl mt-20 font-bold'>Design</h1><p className='py-3'>It is a long established fact  will be distracted.
                            Lorem Ipsum is simply dummy from text of the
                            and typesetting indufstry. </p>
                    </div>
                </div>


                <div className='tablet:flex  tablet:w-[800px] tablet:mt-40 mobile:mt-40  mobile:mx-5 justify-between tablet:mx-auto'>
                    <div className='tablet:w-96 mt-10'>
                        <div className='flex justify-between'>
                            <img src='Icon (2).png' className='w-24' />
                            <h1 className='text-8xl text-white font-bold'>04</h1>
                        </div>
                        <h1 className='text-3xl mt-20 font-bold'></h1><p className='py-3'>It is a long established fact  will be distracted.
                            Lorem Ipsum is simply dummy from text of the
                            and typesetting indufstry. </p>
                    </div>
                    <div>
                        <img src="Image (3).png" className='w-[350px] rounded-[30px] tablet:mt-0 mobile:mt-20' />
                    </div>
                </div>
            </div>


            {/* ********************** section 3 *********************** */}

            <div className='laptop:w-[1000px] mx-auto py-10 mobile:mt-20  rounded-[50px] bg-[#292F36] text-white tablet:mt-44 text-center'>
                <h1 className='tablet:text-4xl mobile:text-2xl font-bold py-5'>Wanna join the interno?</h1>
                <p>It is a long established fact  will be distracted.</p>
                <button className=' bg-[#CDA274] rounded-xl text-xs flex mx-auto justify-center w-36 py-4 mt-5 text-white '>Contact With Us&nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#292F36]' /></button>
            </div>

            {/* ****************** footer ************************* */}
            <div id="contact" className='tablet:w-[1000px] mt-40 text-[#292F36] mobile:mx-10 tablet:mx-auto mobile:space-y-10 tablet:space-y-0 grid laptop:grid-cols-5  tablet:grid-cols-3 '>
                <div className='laptop:col-span-2 tablet:w-80 '>
                    <div className='flex  '>
                        <img src='./logo.png' className='w-8 h-7 mt-2 mx-1' />
                        <h1 className='font-bold text-4xl text-[#292F36] font-sans'>Interno</h1>
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
                    <li className='hover:text-yellow-900 cursor-pointer'><h1 className='font-bold text-2xl'>Pages</h1></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>  <Link to='/about'>AboutUs</Link></p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Our Projects</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Our Teams</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Contact Us</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p> <Link to='/services'>Services</Link></p></li>
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

export default Services