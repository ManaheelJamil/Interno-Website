import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
const Hero = () => {
    return (
        <>
        <div className='bg '>
        <div className='laptop:w-[900px] laptop:p-56 tablet:p-44 mobile:pt-32 mobile:pl-10'>
                <h1 className='text-6xl font-bold text-[#292F36]'>Let Your Home Be Unique</h1>
                <p className='text-gray-600 mt-4'>There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.</p>
                <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-36 py-4 mt-5 text-white '>Get Started &nbsp;<HiOutlineArrowNarrowRight className='text-xl' /></button>

            </div>
        </div>
           

        </>
    )
}

export default Hero