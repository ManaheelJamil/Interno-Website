import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
const Section6 = () => {
  return (
    <>
    <div id="blog">
    <h1 className='tablet:text-5xl mobile:text-4xl font-bold text-center mt-32 text-[#292F36]'>Articles & News</h1>
      <p className='tablet:w-[550px] text-center text-[#292F36] mx-auto mt-5'>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using..</p>
      <div className='laptop:w-[1000px] mx-auto grid laptop:grid-cols-3 gap-5 tablet:grid-cols-2 justify-around mt-10'>
        <div className='w-72 p-5 border rounded-[40px] '>
          <img src="kitchen.png" className=' duration-700 hover:scale-105 cursor-pointer rounded-t-[40px]' />
          <h1 className='text-xl text-[#292F36] mt-2 font-bold'>Let’s Get Solution For Building Construction Work</h1>
          <div className='flex  px-2 justify-between tablet:w-64 mt-3'>
            <div>
              <p className='text-[#292F36] mt-2'>26 December,2022 </p>
            </div>
            <div className='w-10 h-10 rounded-full flex justify-center bg-gray-300'>
              <MdKeyboardArrowRight className='text-3xl text-[#292F36] mt-1' />
            </div>
          </div>
        </div>
        <div className='w-72 p-5 border rounded-[40px] '>
          <img src="left kitchen.png" className=' duration-700 hover:scale-105 cursor-pointer rounded-t-[40px]' />
          <h1 className='text-xl text-[#292F36] mt-2 font-bold'>Low Cost Latest Invented Interior Designing
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
        <div className='w-72 p-5 border rounded-[40px] '>
          <img src="frontKitchen.png" className=' duration-700 hover:scale-105 cursor-pointer rounded-t-[40px]' />
          <h1 className='text-xl text-[#292F36] mt-2 font-bold'>Best For Any Office & Business Interior
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
     
    </>
  )
}

export default Section6