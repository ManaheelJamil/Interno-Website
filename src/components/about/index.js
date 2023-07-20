import React from 'react'
import { useState, useEffect } from 'react';
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Link } from 'react-router-dom';
const AboutUs = () => {
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
      {/* *************** navbar ****************** */}

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
            <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#services">Services</a></li>
            <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#project">Project</a></li>
            <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#blog">Blog </a></li>
            <li className='hover:text-yellow-800 cursor-pointer' onClick={handleClick}><a href="#contact">Contact</a></li>
          </div>)}
      </div>

      {/* **************** hero****************** */}


      <img src='banner.png' />

      <div className='tablet:w-96 mobile:w-60 p-10  bg-white tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto  tablet:h-[800px] mobile:h-[650px]  rounded-[30px] text-center   text-[#292F36]'>
        <h1 className='tablet:text-4xl mobile:text-2xl font-semibold'>About Us</h1>
        <p>Home / About Us</p>
      </div>
      <div className='pt-20 rounded-[40px] tablet:mx-auto mobile:mx-2 text-center tablet:w-[600px] text-[#292F36] h-80 mt-40 border-[13px] border-[#F4F0EC]'>
        <h1 className='tablet:text-2xl mobile:text-lg mx-5 font-bold absolute italic tablet:mx-10 tablet:w-[500px]'>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it<br /> <p className='text-xl mt-4 font-light'>-BUNNY WILLIAMS</p></h1>
      </div>




      {/* ************** section 1 ****************** */}

      <div className='tablet:flex tablet:w-[900px] tablet:mt-60 mobile:mt-40 mobile:mx-5 justify-between tablet:mx-auto'>
        <div className='tablet:w-96'>
          <h1 className='text-3xl font-bold'>What We Do</h1><p className='py-3'>It is a long established fact that a reader will be distracted by the of readable content of a page
            when lookings at its layouts the points of using
            that it has a more-or-less normal.</p>
          <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-36 py-4 mt-5 text-white '>Over Concept &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#CDA274]' /></button>
        </div>
        <div>
          <img src="image.png" className='w-[450px] tablet:mt-0 mobile:mt-20' />
        </div>
      </div>
      {/* ************** section 2 ****************** */}

      <div className='tablet:flex tablet:w-[900px] tablet:mt-40 mobile:mt-40 mobile:mx-5 justify-between tablet:mx-auto'>
        <div>
          <img src="photo.jpg" className='w-[450px] rounded-[30px] tablet:mt-0 mobile:mt-20' />
        </div>
        <div className='tablet:w-96'>

          <h1 className='text-3xl font-bold'>The End Result</h1><p className='py-3'>It is a long established fact that a reader will be distracted by the of readable content of a page
            when lookings at its layouts the points of using
            that it has a more-or-less normal.</p>
          <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-36 py-4 mt-5 text-white '>Our Portfolio &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#CDA274]' /></button>
        </div>
      </div>

      {/* ************** section 3 ****************** */}

      <div className='bg-[#F4F0EC] text-center py-24 mt-10 mx-auto'>
        <h1 className='text-3xl mx-auto  mt-32 tablet:w-96 font-bold text-[#292F36]'>What the People Thinks
          About Us</h1>
        <div className='tablet:w-[850px] mx-auto mt-10  flex flex-wrap gap-5 justify-around'>
          <img src="image 1.png" className='w-48 h-72' />
          <img src="image 2.png" className='w-48 h-72' />
          <div className='bg-white tablet:w-52 mobile:w-48 rounded-[20px] pt-16'>
            <h1 className='text-xl  font-semibold'>Nattasha Julie</h1>
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
      <div className='tablet:w-[680px] mx-auto text-center '>
        <h1 className='tablet:text-3xl mobile:text-2xl tablet:mx-auto mx-5 text-center pt-36  tablet:w-96 font-semibold text-[#292F36]'>Creative project? Let's have
          a productive talk.</h1>
        <div className='mt-10 grid tablet:grid-cols-2 mobile:grid-cols-1 gap-10 mx-5'>
          <input type='text' placeholder='Name' className='tablet:w-80 border-b-2 border-[#292F36] pb-2        ' />
          <input type='Email' placeholder='Email' className='tablet:w-80 border-b-2 border-[#292F36] tablet:ml-10 pb-2' />
        </div>
        <input type='text' placeholder='Hello I am Interested In' className='tablet:w-[700px] mt-5 pt-5 pb-20 border-[#292F36] border-b-2' />
        <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-36 py-4 mt-20 text-white mx-auto'>Send Now &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#CDA274]' /></button>
      </div>

      {/* ***************** footer *************** */}

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
          <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>About Us</p></li>
          <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Our Projects</p></li>
          <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Our Teams</p></li>
          <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Contact Us</p></li>
          <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><p>Services</p></li>
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

export default AboutUs