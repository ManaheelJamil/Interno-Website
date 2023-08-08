import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { Link, useParams } from 'react-router-dom';
import BlogData from "../../data/Blog.json"
const BlogDetails = (props) => {
  const param = useParams()
  const filteredItems = BlogData.filter(item => item.id === parseInt(param.id));
  const finalData = filteredItems[0]
  console.log("hello", finalData)
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
          <img src='/logo.png' className='w-5 h-5 mt-2 mx-1' />
          <h1 className='font text-2xl text-[#292F36] '>Interno</h1>
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


      <img src='/Banner (3).jpg' className='w-full ' />


      {/* ***************** section 1 **************** */}
      <div className='tablet:w-[900px] tablet:mx-auto mobile:mx-5 mt-44'>
            <h1 className='font tablet:text-5xl mobile:text-3xl tablet:w-[70%] text-[#292F36] '>{finalData.heading}
            </h1>
            <img src={finalData.image} className='tablet:w-[85%] mt-5' alt="one"/>
            <div className='tablet:w-[85%] flex justify-between mt-7 text-[#292F36] '>
              <p>26 December,2022 </p>
              <p>Interior / Design / Home / Decore</p>
            </div>
            <p className='text-[#292F36]  mt-10 tablet:w-[85%] text-xl'>{finalData.description}</p>
            <div className='tablet:w-[85%]  text-center text-[#CDA274] bg-[#F4F0EC] rounded-[50px] h-60'>

              <p className='italic font text-2xl mt-20 pt-24'>The details are not the details.<br />
                They make the design.</p>
            </div>
            <h1 className='font text-5xl tablet:w-[70%] text-[#292F36] tablet:mt-10 mobile:mt-20 '>Design sprints are great</h1>
            <p className='mt-3 text-lg tablet:w-[85%] text-[#292F36]'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <p className='tablet:w-[70%] mt-5'>1
              Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br /><br />
              2
              Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br /><br />
              3
              Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <img src={finalData.image} className='tablet:w-[85%] my-10 ' />
            <p className='tablet:w-[85%] text-lg'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <div className='tablet:w-[85%] text-[#292F36] mt-10 tablet:flex justify-between'>
              <div className='flex space-x-5'>
                <h1 className='text-xl mt-3 font-bold font'>Tags</h1>
                <button className='bg-[#292F36] text-white rounded-xl w-32 py-4'>Kitchen</button>
                <button className='bg-[#F4F0EC] text-[#292F36] rounded-xl w-32 py-4'>Bedroom</button>
              </div>
              <div className='flex justify-between mt-3 w-44'>
                <FaFacebookF />
                <BsTwitter />
                <BiLogoLinkedin />
                <FaInstagram />
              </div>
            </div>
            <h1 className='font text-3xl mt-32 tablet:w-[70%] text-[#292F36] '>Leave a Reply
            </h1>
      </div>

      {/* ***************** section 4**************** */}
      <div className='tablet:w-[950px] mx-auto'>
        <div className='tablet:w-[87%] text-center '>
          <div className='mt-10 grid tablet:grid-cols-2 mobile:grid-cols-1 gap-10 mx-5'>
            <input type='text' placeholder='Name' className='border-b-2 border-[#292F36] pb-2' />
            <input type='Email' placeholder='Email' className=' border-b-2 border-[#292F36]  pb-2' />
            <input type='text' placeholder='Website' className='border-b-2 border-[#292F36] pb-2' />
            <input type='Email' placeholder='Phone' className=' border-b-2 border-[#292F36]  pb-2' />
          </div>
          <input type='text' placeholder='Hello I am Interested In' className='tablet:w-[96%] mobile:w-[90%] mt-5 pt-5 pb-20 border-[#292F36] border-b-2' />
        </div>
        <div className='flex tablet:w-[85%] ml-5 mt-10'>
          <input type="checkbox" className='w-5' />
          <p className='text-[#CDA274] font-semibold ml-2 text-xl'>Save my name, email, and website in this browser for the next time I comment.</p>
        </div>
        <button className='bg-[#292F36] rounded-2xl ml-5 text-md flex justify-center w-44 py-5 mt-10 text-white '>Send Now &nbsp;<HiOutlineArrowNarrowRight className='text-2xl text-[#CDA274]' /></button>

      </div>
      {/* ***************** footer *************** */}

      <div id="contact" className='tablet:w-[1000px] mt-40 text-[#292F36] mobile:mx-10 tablet:mx-auto mobile:space-y-10 tablet:space-y-0 grid laptop:grid-cols-5  tablet:grid-cols-3 '>
        <div className='laptop:col-span-2 tablet:w-80 '>
          <div className='flex  '>
            <img src='/logo.png' className='w-8 h-7 mt-2 mx-1' />
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

export default BlogDetails