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
import {AiOutlineCopyrightCircle} from"react-icons/ai"
import { Link } from 'react-router-dom';
const ServiceSample = () => {
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
                    <h1 className='font-bold text-2xl text-[#292F36] font-sans'>Interno</h1>
                </div>
                <div>
                    <ul class=' tablet:flex  mobile:hidden tablet:block tablet:space-x-5 laptop:space-x-10 text-[#292F36] font-semibold'>
                        <li className='hover:text-yellow-800'><a href="#">Home</a></li>
                        <li className='hover:text-yellow-800'><a href="#pages">Pages</a></li>
                        <li className='hover:text-yellow-800'><Link to='/services'>Services</Link></li>
                        <li className='hover:text-yellow-800'><Link to='/project'>Project</Link></li>
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
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><Link to='/services'>Services</Link></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#project">Project</a></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#blog">Blog </a></li>
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#contact">Contact</a></li>
                    </div>)}
            </div>

            {/* *********** hero section ************** */}


            <img src='Photo.jpg' className='w-full ' />

            <div className='tablet:w-96 mobile:w-60 p-10   tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-40 bg-white rounded-[30px] text-center   text-[#292F36]'>
                <h1 className='tablet:text-4xl mobile:text-2xl font-semibold'>Service Single</h1>
                <p>Home / Service Single</p>
            </div>

            {/* *************section1**************** */}

            <div className='tablet:w-[900px] mx-auto mt-44 tablet:flex m-10 gap-10 justify-between'>
                <div className='tablet:w-[50%] m-5'>
                    <h1 className='text-4xl font-bold text-[#3d444b]'>We set the trends of
                        modern living
                        Services.</h1>
                </div>
                <div className='tablet:w-[70%] m-5'>
                    < p className=' text-lg text-[#CDA274] font-semibold'>It is a long established fact that a reader will be distracted by the of readable content of a page</p>

                    <p className='text-[#292F36] my-10'> when lookings at its layouts the points spriof using that it has a more
                        less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>
                    <p>when lookings at its layouts the points spriof using that it has a more
                        less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>
                </div>
            </div>

            {/* ******************* section 2******************* */}

            <div id="pages" className='flex flex-wrap justify-around mt-40 gap-10 m-10 tablet:w-[900px] align-middle items-center mx-auto'>
                <img src='01.png' className='h-10' />
                <img src='02.png' className='h-20' />
                <img src='03 (1).png' className='h-10' />
                <img src='04.png' className='h-10' />
                <img src='05.png' className='h-10' />
            </div>
            {/* ************************** section 3 *********************** */}


            <img src='Video.png' className='mx-auto my-44 tablet:w-[900px] hover:scale-105 duration-700'/>
      
      {/* **************** section 4 ****************** */}

      <div className='tablet:w-[800px] tablet:mx-auto mx-5 tablet:flex justify-between'>
        <div>
            <h1 className='text-4xl font-semibold text-[#3d444b]'>Use of Interior</h1>
            <ol className='3d444b space-y-5 m-5 list-decimal'>
               <li>We provide high quality design services.</li>
                <li>Project on time and Latest Design.</li>
                <li>Scientific Skills For getting a better result.</li>
                <li>Renovations Benefit of Service</li>
                <li>We are confident about our projects.</li>
            </ol>
        </div>
        <div>
            <h1 className='text-4xl font-semibold text-[#3d444b]'>Make An Art</h1>
            <ol className='3d444b space-y-5 m-5 list-decimal'>
               <li>We provide high quality design services.</li>
                <li>Project on time and Latest Design.</li>
                <li>Scientific Skills For getting a better result.</li>
                <li>Renovations Benefit of Service</li>
                <li>We are confident about our projects.</li>
            </ol>
        </div>
      </div>

      {/* ************* section 5 **************** */}
      <div className='tablet:flex tablet:w-[900px] tablet:mt-40 mobile:mt-40 mobile:mx-5 justify-between tablet:mx-auto'>
        <div>
          <img src="ban.jpg" className='w-[450px] tablet:h-60 rounded-[50px] tablet:mt-0 mobile:mt-20' />
        </div>
        <div className='tablet:w-96 tablet:mt-0 mobile:mt-10'>

          <h1 className='text-3xl font-bold text-[#292F36]'>We love design.That's how we got here.</h1><p className='py-3'>It is a long established fact that a reader will be distracted by the of readable content .</p>
          <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-36 py-4 mt-5 text-white '>Our Portfolio &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#CDA274]' /></button>
        </div>
      </div>

      {/* **************** section 6 ******************* */}
        
      <div className='bg-[#F4F0EC]'>
                    <div className=' tablet:w-[1000px] mx-auto mt-32 flex justify-around gap-10 flex-wrap py-20'>
                        <div className='tablet:w-52 mx-auto border-r-2 px-5 border-l-2 border-[#e2c5a6]'>
                            <h1 className='text-7xl text-[#b78f64] text-center font-semibold'>12</h1>
                            <p className='text-md text-[#292F36]  text-center  mt-10 '>Year Of Experience</p>
                        </div>
                        <div className=' tablet:w-52 mx-auto border-l-2 px-5 border-r-2 border-[#e2c5a6]'>
                            <h1 className='text-7xl text-[#b78f64] text-center font-semibold'>85</h1>
                            <p className='text-md text-[#292F36] mt-10  text-center  '>Success Project</p>
                        </div>
                        <div className='tablet:w-52 mx-auto border-l-2 px-5 border-r-2 border-[#e2c5a6]'>
                            <h1 className='text-7xl text-[#b78f64] text-center font-semibold'>15</h1>
                            <p className='text-md text-[#292F36] mt-10  text-center '>Active Project</p>
                        </div>
                        <div className=' tablet:w-52 mx-auto border-l-2 px-5 border-r-2 border-[#e2c5a6]'>
                            <h1 className='text-7xl text-[#b78f64] text-center font-semibold'>75</h1>
                            <p className='text-md text-[#292F36] mt-10  text-center '>Happy Customers</p>
                        </div>
                    </div>
                </div>


      {/* **************** section 6 ******************* */}
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

            <p class=" mt-32 flex justify-center text-[#292F36]  mx-auto">2023<AiOutlineCopyrightCircle className='text-[#292F36]  px-1 text-2xl'/>
        All rights reserved by<a href="https://mayonity.com/" className='text-[#292F36]  font-bold ml-3' target='_blank'>Mayonity</a></p>
        </>
    )
}

export default ServiceSample
