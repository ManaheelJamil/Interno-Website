import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"

const Footer = () => {
  return (
    <div>
    <div id="contact" className='tablet:w-[1100px] tablet:mx-auto mt-40 text-[#292F36] mobile:mx-10  mobile:space-y-10 tablet:space-y-0 grid laptop:grid-cols-4  tablet:grid-cols-3 '>
    <div className='laphrefp:col-span-2 tablet:w-80 '>
        <div className='flex  '>
            <img src='./logo.jpeg' className='w-8 h-7 mt-2 mx-1' />
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

    <div className='list-none space-y-7 tablet:ml-20 laphrefp:ml-0 '>
        <li className='hover:text-yellow-900 cursor-pointer font'><h1 className=' text-2xl'>Pages</h1></li>
        <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><a href='/about'>About Us</a></li>
        <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><a href='/project'> Our Project</a></li>
        <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><a href='/team'>Our Team</a></li>
        <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><a href='/ContactUs'>ContactUs</a></li>
        <li className='hover:text-yellow-900 cursor-pointer hover:font-semibold'><a href='/services'>Services</a></li>
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
<p class=" mt-32 flex justify-center text-[#292F36]  mx-auhref">2023<AiOutlineCopyrightCircle className='text-[#292F36]  px-1 text-2xl' />
    All rights reserved by<a href="https://mayonity.com/" className='text-[#292F36]  font-bold ml-3' target='_blank'>Mayonity</a></p>
    </div>
  )
}

export default Footer