import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
// import { IoCallOutline } from "react-icons/io5"
// import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { Link } from 'react-router-dom';
const Projectdetail = () => {
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
                    <h1 className='font text-2xl text-[#292F36] '>Interno</h1>
                </div>
                <div>
                    <ul class=' tablet:flex  mobile:hidden tablet:block tablet:space-x-5 laptop:space-x-10 text-[#292F36] font-semibold'>
                        <li className='hover:text-yellow-800'><a href="/">Home</a></li>
                        <li className='hover:text-yellow-800'><a href="/">Pages</a></li>
                        <li className='hover:text-yellow-800'><Link to='/services'>Services</Link></li>
                        <li className='hover:text-yellow-800'><Link to='/project'>Project</Link></li>
                        <li className='hover:text-yellow-800'><a href="/">Blog </a></li>
                        <li className='hover:text-yellow-800'><a href="/">Contact</a></li>
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


            <img src='Banner.jpg' className='w-full ' />

            {/* **************** section 1 *************** */}
            <div className='tablet:w-[1000px] tablet:mx-auto mobile:mx-5 mt-32 tablet:flex justify-between'>
                <div className='tablet:w-[45%] text-[#292F36] bg-[#F4F0EC] tablet:p-16 mobile:p-5 rounded-[40px] tablet:h-80 flex justify-around'>
                    <div className='font-bold tablet:text-xl font mobile:text-md space-y-2 '>
                        <h1>Client</h1>
                        <h1>Category</h1>
                        <h1>Tags</h1>
                        <h1>Date</h1>
                        <h1>link</h1>
                    </div>
                    <div className=' tablet:text-xl font mobile:text-md space-y-2 '>
                        <p>Your Client Name</p>
                        <p>Interiors</p>
                        <p>Interior, Home</p>
                        <p>Date 23,02, 2022</p>
                        <p>Link example.com</p>
                    </div>
                </div>
                <div className='tablet:w-[50%] tablet:mt-0 mobile:mt-10'>
                    <h1 className='text-4xl font text-[#292F36] mb-5'>Minimal Look Bedrooms</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
                        <br /><br />
                        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>
                </div>
            </div>


            {/* *************** section 2 ********************** */}
            <div className=''>
            <img src="Image (5).png" className='tablet:w-[1000px] mt-44 tablet:mx-auto hover:scale-105 duration-700' />
            {/* <div className='w-20 h-20 mx-auto bg-white rounded-full hover:scale-105 duration-700 absolute align-middle tablet:top-80 mobile:top-32 right-0 left-0 p-6'><BsSearch className='text-[#CDA274]  text-2xl mx-auto font-bold' /></div> */}
            </div>
          
          {/* ***************** footer ********************* */}
          <div id="contact" className='tablet:w-[1000px] mt-40 text-[#292F36] mobile:mx-10 tablet:mx-auto mobile:space-y-10 tablet:space-y-0 grid laptop:grid-cols-5  tablet:grid-cols-3 '>
                <div className='laptop:col-span-2 tablet:w-80 '>
                    <div className='flex  '>
                        <img src='./logo.png' className='w-8 h-7 mt-2 mx-1' />
                        <h1 className='font text-4xl text-[#292F36] '>Interno</h1>
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
                    <li className='hover:text-yellow-900 cursor-pointer font'><h1 className='font-bold text-2xl'>Pages</h1></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>  <Link to='/about'>AboutUs</Link></p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Our Projects</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Our Teams</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Contact Us</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p> <Link to='/services'>Services</Link></p></li>
                </div>
                <div className='list-none space-y-7 '>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold font'><h1 className='font-bold text-2xl'>Services</h1></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Kitchen</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Living Area</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Bathroom</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Dinning Hall</p></li>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Bedroom</p></li>
                </div>
                <div className='list-none space-y-7 '>
                    <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold font' ><h1 className='font-bold text-2xl'>Contact</h1></li>
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

export default Projectdetail