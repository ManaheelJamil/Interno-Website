import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { useState, useEffect } from 'react';
import { IoCallOutline } from "react-icons/io5"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { Link } from 'react-router-dom';

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

            {/* ************* navbar ************* */}

            <div className={`flex  justify-around tablet:w-full   py-5 top-0 left-0 right-0  fixed   mx-auto   ${scrolled ? 'bg-white' : 'bg-white'}`} class=' flex justify-around tablet:w-full relative  py-5'>
                <div className='flex '>
                    <img src='./logo.png' className='w-5 h-5 mt-2 mx-1' />
                    <h1 className='font-bold text-2xl text-[#292F36] font-sans'>Interno</h1>
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
                        <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#contact">Contact</a></li>
                    </div>)}
            </div>

            {/* *********** hero section ************** */}


            <div className='bg '>
                <div className='laptop:w-[900px] laptop:p-56 tablet:p-44 mobile:pt-32 mobile:pl-10'>
                    <h1 className='text-6xl font text-[#292F36]'>Let Your Home Be Unique</h1>
                    <p className='text-gray-600 mt-4 w-80'>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
                    <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-36 py-4 mt-5 text-white '>Get Started &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#CDA274]' /></button>

                </div>
            </div>

            {/* *************section1**************** */}

            <div className='laptop:w-[1000px] tablet:w-[600px] tablet:gap-0 mobile:gap-5 mx-auto grid laptop:grid-cols-3 tablet:grid-cols-2  justify-center mt-32'>
            <div className='w-72 px-10 h-64 pt-10 hover:bg-[#F4F0EC]  cursor-pointer hover:rounded-[30px] text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                    <Link to='/ServiceSample'> <h1 className='text-xl  font text-[#292F36]'>Project Plan</h1>
                        <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                            available, majority.</p>
                        <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 font-bold text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>
                    </Link>
                </div>

                <div className='w-72 px-10 h-64 pt-10 hover:bg-[#F4F0EC]  cursor-pointer hover:rounded-[30px] text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                    <Link to='/ServiceSample'>   <h1 className='text-xl  font text-[#292F36]'>Interior Work</h1>
                        <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                            available, majority.</p>
                        <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 font-bold text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>
                    </Link>
                </div>
                <div className='w-72 px-10 h-64 pt-10 hover:bg-[#F4F0EC]  cursor-pointer hover:rounded-[30px] text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                    <Link to='/ServiceSample'>
                        <h1 className='text-xl  font text-[#292F36]'>Realization</h1>
                        <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                            available, majority.</p>
                        <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 font-bold text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>
                    </Link>
                </div>
            </div>

            {/* *************section2**************** */}

            <div className='tablet:flex laptop:w-[1100px] tablet:w-[900px] mobile:w-80 mobile:p-5 mobile:mt-10 tablet:mt-40 mx-auto justify-around'>
                <div className='tablet:w-80 mobile:w-60 mt-10'>
                    <h1 className='tablet:text-4xl mobile:text-3xl font text-[#292F36]'>We Create The Art
                        Of Stylish Living
                        Stylishly</h1>
                    <p className='text-gray-600 mt-5'>It is a long established fact that a reader will be distracted by the of readable content of a page
                        when lookings at its layouts the points of using
                        that it has a more-or-less normal.</p>
                    <div className='flex gap-3 my-7'>
                        <div className='w-14 h-14 rounded-full bg-[#CDA274] opacity-30 '>
                            <IoCallOutline className='text-3xl text-yellow-900  mx-auto mt-3' />
                        </div>

                        <div>
                            <h1 className=' font-bold text-xl  text-[#292F36]'>012345678</h1>
                            <p className='text-gray-600'>Call Us Anytime</p>
                        </div>
                    </div>
                    <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-44 py-4 mt-5 text-white '>Get Free Estimate &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-800' /></button>
                </div>
                <div >
                    <img src='section2.jpg' className='duration-700 hover:scale-105 img laptop:w-[450px] tablet:w-[400px] mobile:w-[300px] mobile:mt-10 tablet:mt-0' />
                </div>
            </div>


            {/* *************section3**************** */}

            <div id="services" className='laptop:w-[950px] tablet:w-[850px] mx-auto laptop:h-[500px] pb-10  rounded-[50px] mt-32 bg-[#F4F0EC]'>
                <h1 className='text-[#292F36]  text-4xl  tablet:w-[400px] pt-20 font  mx-auto text-center'>What the People Thinks
                    About Us</h1>
                <div className='grid laptop:grid-cols-3 tablet:grid-cols-2 p-5 mobile:gap-5 tablet:gap-10  laptop:w-[900px] tablet:w-[800px] mx-auto mt-10'>
                    <div className='bg-white rounded-3xl laptop:w-72  duration-700 hover:scale-105 cursor-pointer h-60 text-[#292F36]'>
                        <div className='flex gap-5 mx-5 pt-14'>
                            <img src='1icon.jpg' className='w-14 h-14 rounded-full' />
                            <div>
                                <h1 className='text-xl font font-bold'>Nattasha Mith</h1>
                                <p>Sydney, USA</p>
                            </div>
                        </div>
                        <p className='mt-5 mx-5'>Lorem Ipsum is simply dummy
                            text of the typesetting industry.
                            Ipsum has been.</p>
                    </div>
                    <div className='bg-white rounded-3xl laptop:w-72 duration-700 hover:scale-105 cursor-pointer h-60 text-[#292F36]'>
                        <div className='flex gap-5 mx-5 pt-14'>
                            <img src='2icon.jpg' className='w-14 h-14 rounded-full' />
                            <div>
                                <h1 className='text-xl font font-bold'>Raymond Galario</h1>
                                <p>Sydney, Australia</p>
                            </div>
                        </div>
                        <p className='mt-5 mx-5'>Lorem Ipsum is simply dummy
                            text of the typesetting industry.
                            Ipsum has been.</p>
                    </div>
                    <div className='bg-white rounded-3xl laptop:w-72 duration-700 hover:scale-105 cursor-pointer h-60 text-[#292F36]'>
                        <div className='flex gap-5 mx-5 pt-14'>
                            <img src='3icon.jpg' className='w-14 h-14 rounded-full' />
                            <div>
                                <h1 className='text-xl font font-bold'>Benny Roll</h1>
                                <p>Sydney, New York</p>
                            </div>
                        </div>
                        <p className='mt-5 mx-5'>Lorem Ipsum is simply dummy
                            text of the typesetting industry.
                            Ipsum has been.</p>
                    </div>
                </div>
            </div>

            {/* *************section4**************** */}

            <div id="pages" className='flex flex-wrap tablet:w-[900px] justify-around mt-40 gap-10 m-10 align-middle items-center mx-auto'>
                <img src='01.png' className='h-10' />
                <img src='02.png' className='h-20' />
                <img src='03 (1).png' className='h-10' />
                <img src='04.png' className='h-10' />
                <img src='05.png' className='h-10' />
            </div>


            {/* *************section5**************** */}

            <div id="project">
                <h1 className='tablet:text-5xl mobile:text-4xl font  text-center mt-32 text-[#292F36]'>Follow Our Projects</h1>
                <p className='tablet:w-[550px] text-center text-[#292F36] mx-auto mt-5'>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>

                <div className='tablet:w-[900px] mx-auto  place-items-center mt-20 gap-10 grid  laptop:grid-cols-2'>
                    <div className='m-5'>
                        <img src="image1.png" className='tablet:w-96 mobile:w-80 mobile:h-80  duration-700 hover:scale-105 cursor-pointer tablet:h-96' />
                        <div className='flex justify-between tablet:w-96 mt-3'>
                            <div>
                                <h1 className='text-[#292F36] text-xl font font-semibold'>Modern Kitchen</h1>
                                <p className='text-[#292F36]'>Decor / Artchitecture</p>
                            </div>
                            <div className='w-12 h-12 rounded-full flex justify-center bg-gray-300'>
                                <MdKeyboardArrowRight className='text-3xl text-[#292F36] mt-2' />
                            </div>
                        </div>
                    </div>
                    <div className='m-5'>
                        <img src="image2.png" className='tablet:w-96 mobile:w-80 duration-700 hover:scale-105 cursor-pointer mobile:h-80 tablet:h-96' />
                        <div className='flex justify-between tablet:w-96 mt-3'>
                            <div>
                                <h1 className='text-[#292F36] text-xl font font-semibold'>Modern Kitchen</h1>
                                <p className='text-[#292F36]'>Decor / Artchitecture</p>
                            </div>
                            <div className='w-12 h-12 rounded-full flex justify-center bg-gray-300'>
                                <MdKeyboardArrowRight className='text-3xl text-[#292F36] mt-2' />
                            </div>
                        </div>
                    </div>
                    <div className='m-5'>
                        <img src="image3.png" className='tablet:w-96 mobile:w-80 duration-700 hover:scale-105 cursor-pointer mobile:h-80 tablet:h-96' />
                        <div className='flex justify-between tablet:w-96 mt-3'>
                            <div>
                                <h1 className='text-[#292F36] text-xl font font-semibold'>Modern Kitchen</h1>
                                <p className='text-[#292F36]'>Decor / Artchitecture</p>
                            </div>
                            <div className='w-12 h-12 rounded-full flex justify-center bg-gray-300'>
                                <MdKeyboardArrowRight className='text-3xl text-[#292F36] mt-2' />
                            </div>
                        </div>
                    </div>
                    <div className='m-5'>
                        <img src="image4.png" className='tablet:w-96 mobile:w-80 duration-700 hover:scale-105 cursor-pointer mobile:h-80 tablet:h-96' />
                        <div className='flex justify-between tablet:w-96 mt-3'>
                            <div>
                                <h1 className='text-[#292F36] text-xl font font-semibold'>Modern Kitchen</h1>
                                <p className='text-[#292F36]'>Decor / Artchitecture</p>
                            </div>
                            <div className='w-12 h-12 rounded-full flex justify-center bg-gray-300'>
                                <MdKeyboardArrowRight className='text-3xl text-[#292F36] mt-2' />
                            </div>
                        </div>
                    </div>
                </div>
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
            
            </div>

            {/* ******************section6**************** */}

            <div id="blog">
                <h1 className='tablet:text-5xl mobile:text-4xl font  text-center mt-32 text-[#292F36]'>Articles & News</h1>
                <p className='tablet:w-[550px] text-center text-[#292F36] mx-auto mt-5'>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using..</p>
                <div className='laptop:w-[1000px] mx-auto grid laptop:grid-cols-3 gap-5 tablet:grid-cols-2 justify-around mt-10'>
                    <div className='w-72 p-5 border rounded-[40px] hover:bg-[#F4F0EC] cursor-pointer'>
                        <img src="kitchen.png" className=' duration-700 hover:scale-105 cursor-pointer rounded-t-[40px]' />
                        <h1 className='text-xl text-[#292F36] mt-2  font  font-semibold'>Let’s Get Solution For Building Construction Work</h1>
                        <div className='flex  px-2 justify-between tablet:w-64 mt-10'>
                            <div>
                                <p className='text-[#292F36] mt-2'>26 December,2022 </p>
                            </div>
                            <div className='w-10 h-10 rounded-full flex justify-center bg-gray-300'>
                                <MdKeyboardArrowRight className='text-3xl text-[#292F36] mt-1' />
                            </div>
                        </div>
                    </div>
                    <div className='w-72 p-5 border rounded-[40px] hover:bg-[#F4F0EC] cursor-pointer'>
                        <img src="left kitchen.png" className=' duration-700 hover:scale-105 cursor-pointer rounded-t-[40px]' />
                        <h1 className='text-xl text-[#292F36] mt-2 font  font-semibold'>Low Cost Latest Invented Interior Designing
                            Ideas.</h1>
                        <div className='flex  px-2 justify-between tablet:w-64 mt-10'>
                            <div>
                                <p className='text-[#292F36] mt-2'>22 December,2022 </p>
                            </div>
                            <div className='w-10 h-10 rounded-full flex justify-center bg-gray-300'>
                                <MdKeyboardArrowRight className='text-3xl text-[#292F36] mt-1' />
                            </div>
                        </div>
                    </div>
                    <div className='w-72 p-5 border rounded-[40px] hover:bg-[#F4F0EC] cursor-pointer'>
                        <img src="frontKitchen.png" className=' duration-700 hover:scale-105 cursor-pointer rounded-t-[40px]' />
                        <h1 className='text-xl text-[#292F36] mt-2  font font-semibold'>Best For Any Office & Business Interior
                            Solution</h1>
                        <div className='flex  px-2 justify-between tablet:w-64 mt-10'>
                            <div>
                                <p className='text-[#292F36] mt-2'>22 December,2022 </p>
                            </div>
                            <div className='w-10 h-10 rounded-full flex justify-center bg-gray-300'>
                                <MdKeyboardArrowRight className='text-3xl text-[#292F36] mt-1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* **************Section7***************** */}
            <div className='laptop:w-[1000px] mx-auto py-10 mobile:mt-20  rounded-[50px] bg-[#292F36] text-white tablet:mt-44 text-center'>
                <h1 className='tablet:text-4xl mobile:text-2xl font  py-5'>Wanna join the interno?</h1>
                <p>It is a long established fact  will be distracted.</p>
                <button className=' bg-[#CDA274] rounded-xl text-sm flex mx-auto justify-center w-48 py-5 mt-6 text-white '>Contact With Us&nbsp;<HiOutlineArrowNarrowRight className='ml-2 text-xl text-[#292F36]' /></button>
            </div>

            {/* *************** footer **************** */}

            <div id="contact" className='tablet:w-[1000px] mt-40 text-[#292F36] mobile:mx-10 tablet:mx-auto mobile:space-y-10 tablet:space-y-0 grid laptop:grid-cols-5  tablet:grid-cols-3 '>
                <div className='laptop:col-span-2 tablet:w-80 '>
                    <div className='flex  '>
                        <img src='./logo.png' className='w-8 h-7 mt-2 mx-1' />
                        <h1 className='font-bold text-4xl text-[#292F36] font '>Interno</h1>
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

export default Navbar