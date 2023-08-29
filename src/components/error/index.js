import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { useState, useEffect } from 'react';
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { FaAngleRight } from "react-icons/fa"

const Error = () => {
    return (
        <div>
            {/* **************** section 1 ****************** */}

            <div className=' tablet:w-[900px]  mobile:mx-5 tablet:mx-auto  tablet:flex'>

                <div className='tablet:mt-20'>
                    <h1 className='text-[#CDA274] text-[200px] font-bold font'>404</h1>
                    <p className='font text-2xl mt-[-10%]   tablet:w-96'>We are sorry, but the page
                        you requested was not found</p>
                    <button className='bg-[#292F36] rounded-xl  text-sm flex justify-center w-44 py-4 mt-5 text-white '>Back To Home&nbsp;<HiOutlineArrowNarrowRight className='text-2xl text-[#CDA274]' /></button>

                </div>
                <div>
        
                    <img src='error.jpeg' className=' mobile:mt-10 tablet:w-[700px]' />
                </div>
            </div>
        </div>
    )
}

export default Error
