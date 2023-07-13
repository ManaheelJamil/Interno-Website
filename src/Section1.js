import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
const Section1 = () => {
    return (
        <>
            <div className='laptop:w-[900px] tablet:w-[600px] tablet:gap-0 mobile:gap-5 mx-auto grid laptop:grid-cols-3 tablet:grid-cols-2  justify-center mt-32'>
                <div className='w-64 text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                    <h1 className='text-xl font-bold text-[#292F36]'>Project Plan</h1>
                    <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>

                </div>
                <div className='w-64 text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                    <h1 className='text-xl font-bold text-[#292F36]'>Interior Work</h1>
                    <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>

                </div>
                <div className='w-64 text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                    <h1 className='text-xl font-bold text-[#292F36]'>Realization</h1>
                    <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>

                </div>
            </div>
        </>
    )
}

export default Section1