import React from 'react'
import { IoCallOutline } from "react-icons/io5"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
const Section2 = () => {
    return (
        <>
            <div className='tablet:flex laptop:w-[1100px] tablet:w-[900px] mobile:w-80 mobile:p-5 mobile:mt-10 tablet:mt-40 mx-auto justify-around'>
                <div className='tablet:w-80 mobile:w-60 mt-10'>
                    <h1 className='tablet:text-4xl mobile:text-3xl text-[#292F36] font-bold'>We Create The Art
                        Of Stylish Living
                        Stylishly</h1>
                    <p className='text-gray-600 mt-5'>It is a long established fact that a reader will be distracted by the of readable content of a page
                        when lookings at its layouts the points of using
                        that it has a more-or-less normal.</p>
                    <div className='flex gap-3 my-7'>
                        <div className='w-14 h-14 rounded-full bg-[#CDA274] opacity-30 '>
                            <IoCallOutline className='text-3xl text-yellow-900  mx-auto mt-3'/>
                        </div>

                        <div>
                            <h1 className=' font-bold text-xl text-[#292F36]'>012345678</h1>
                            <p className='text-gray-600'>Call Us Anytime</p>
                        </div>
                    </div>
                    <button className='bg-[#292F36] rounded-xl text-xs flex justify-center w-36 py-4 mt-5 text-white '>Get Free Estimate &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-800' /></button>
                </div>
<div >
    <img src='section2.jpg' className='duration-700 hover:scale-105 img laptop:w-[450px] tablet:w-[400px] mobile:w-[300px] mobile:mt-10 tablet:mt-0'/>
</div>
            </div>
        </>
    )
}

export default Section2