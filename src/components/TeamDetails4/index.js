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
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
const TeamDetails4 = () => {
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


            <img src='teamBanner.jpg' className='w-full ' />

            <div className='tablet:w-96 mobile:w-60 p-10   tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-40 bg-white rounded-[30px] text-center   text-[#292F36]'>
                <h1 className='tablet:text-4xl mobile:text-2xl font'> Professional Single</h1>
                <p>Home / Team Single</p>
            </div>

            {/* ******************* section 1 ******************* */}
            <div className='tablet:w-[800px]  text-[#292F36]  mt-32 tablet:mx-auto mobile:mx-5 tablet:flex gap-10'>
                <div className=''>
                    <img src='image 3.png' className='tablet:w-[250px] tablet:h-[350px] rounded-3xl' />
                </div>
                <div className='tablet:w-96 mt-6'>
                    <h1 className='font text-3xl'>Nora Owen</h1>
                    <p>Designer</p>
                    <p className='py-3 text-sm'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don't look even slightly believable.</p>
                    <div className='flex gap-5 py-2'>
                        <FaRegEnvelope className='text-2xl text-[#CDA274] ' />
                        <p>info@yourdomain.com</p>
                    </div>
                    <div className='flex gap-5 py-2'>
                        <IoCallOutline className='text-2xl text-[#CDA274] ' />
                        <p>+1 (378) 400-1234</p>
                    </div>
                    <div className='flex gap-5 py-2'>
                        <GiWorld className='text-2xl text-[#CDA274] ' />
                        <p>www.yourdomain.com</p>
                    </div>
                    <div className='flex  text-[#292F36]  text-sm my-3  justify-between w-32'>
                        <FaFacebookF />
                        <BsTwitter />
                        <BiLogoLinkedin />
                        <FaInstagram />
                    </div>
                </div>
            </div>
            {/* ******************* section 2 **************** */}
            <div className='tablet:w-[800px] tablet:mx-auto mobile:mx-5 mt-20 text-[#292F36]'>
                <h1 className='text-3xl font'>Short Biography​</h1>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour
                    randomised words which don't look even slightly believable.
                    <br /><br />
                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.</p>
            </div>
            <div className='tablet:w-[800px] tablet:mx-auto mobile:mx-5 mt-20 tablet:flex gap-14 text-[#292F36]'>
                <div className='tablet:w-[600px]'>
                    <h1 className='text-xl font'>Simplicity and Functionality</h1>
                    <p className='text-sm mt-3'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.
                        <br /><br />
                        There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njecthumour</p>
                    <div className='flex tablet:w-72 mt-6 text-sm font-semibold justify-between'>
                        <h1>Project Design</h1>
                        <p>65%</p>
                    </div>
                    <img src='lin1.png' />
                    <div className='flex tablet:w-96 mt-3 text-sm font-semibold justify-between'>
                        <h1>Team Management</h1>
                        <p>95%</p>
                    </div>
                    <img src='line2.png' />
                    <div className='flex tablet:w-80 mt-3 text-sm font-semibold justify-between'>
                        <h1>Client Satisfaction</h1>
                        <p>75%</p>
                    </div>
                    <img src='line3.png' />
                </div>

                <div >
                    <div>
                        <h1 className='text-xl font'>Qustion And Answer</h1>
                        <p className='text-sm my-3'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>
                    </div>
                    <div className='bg-[#F4F0EC] rounded-3xl  tablet:w-[380px] px-5 py-6'>
                        <div className='tablet:w-[335px] flex justify-between'>
                            <h1 className=' text-sm mt-2 font-bold'>Website & Mobile App Design?</h1>
                            <div className='bg-white w-10 flex justify-center pt-3 h-10 rounded-full'><AiOutlineMinus /></div>
                        </div>
                        <p className='text-sm tablet:w-64 pt-2'>Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.</p>
                    </div>
                    <div className='border-2 border-[#CDA274] rounded-2xl py-2 tablet:w-[380px] flex justify-between px-5 my-5'>
                        <p className='text-sm font-bold mt-2'>How to Easy Successful Projects?</p>
                        <div className='bg-[#F4F0EC] w-10 flex justify-center pt-3 h-10 rounded-full'><AiOutlinePlus /></div>
                    </div>
                    <div className='border-2 border-[#CDA274] rounded-2xl py-2 tablet:w-[380px] flex justify-between px-5'>
                        <p className='text-sm font-bold mt-2'>International Trade Experience?</p>
                        <div className='bg-[#F4F0EC] w-10 flex justify-center pt-3 h-10 rounded-full'><AiOutlinePlus /></div>

                    </div>
                </div>
            </div>
            {/* ************************ section 3 ********************** */}

            <div className='bg-[#F4F0EC] text-center py-24 mt-40 tablet:mx-auto mobile:mx-5'>
                <h1 className='text-3xl mx-auto  mt-12 tablet:w-96  font text-[#292F36]'>What the People Thinks
                    About Us</h1>
                <div className='tablet:w-[850px] mx-auto mt-10  flex flex-wrap gap-5 justify-around'>
                    <img src="Image (7).png" className='w-48 h-72' />
                    <img src="image 2.png" className='w-48 h-72' />
                    <div className='bg-white tablet:w-52 mobile:w-48 rounded-[20px] pt-16'>
                        <h1 className='text-xl font '>Nattasha Julie</h1>
                        <p className='text-xs'>Design, Australia</p>
                        <div className='flex justify-between mx-auto mt-10 w-32'>
                            <FaFacebookF />
                            <BsTwitter />
                            <BiLogoLinkedin />
                            <FaInstagram />
                        </div>
                        <p className='text-md mt-10'>+1 (378) 400-1234<br />
                            julie@email.com</p>
                    </div>
                    <img src="image 3.png" className='w-48 h-72' />

                </div>
            </div>

            {/* ***************** section 4**************** */}
            <div className='tablet:w-[680px] tablet:mx-auto mobile:mx-5 text-center '>
                <h1 className='tablet:text-3xl mobile:text-2xl tablet:mx-auto mx-5 font text-center pt-36  tablet:w-96  text-[#292F36]'>
                    Contact Me</h1>
                <div className='mt-10 grid tablet:grid-cols-2 mobile:grid-cols-1 gap-10 mx-5'>
                    <input type='text' placeholder='Name' className='tablet:w-80 border-b-2 border-[#292F36] pb-2        ' />
                    <input type='Email' placeholder='Email' className='tablet:w-80 border-b-2 border-[#292F36] tablet:ml-10 pb-2' />
                </div>
                <input type='text' placeholder='Send Your Message' className='tablet:w-[700px] ml-5 mt-5 pt-5 pb-20 border-[#292F36] border-b-2' />
                <div className='flex tablet:w-[85%] mx-auto  mt-10'>
                    <input type="checkbox" className='w-5 mx-auto' />
                    <p className='text-[#CDA274] font-semibold  text-sm'>Save my name, email, and website in this browser for the next time I comment.</p>
                </div>
                <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-36 py-4 mt-20 text-white mx-auto'>Send Now &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#CDA274]' /></button>
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

export default TeamDetails4
