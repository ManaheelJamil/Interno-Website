import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
const Section5 = () => {
    return (
        <>
        <div id="project">
        <h1 className='tablet:text-5xl mobile:text-4xl font-bold text-center mt-32 text-[#292F36]'>Follow Our Projects</h1>
            <p className='tablet:w-[550px] text-center text-[#292F36] mx-auto mt-5'>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>

            <div className='tablet:w-[900px] mx-auto  place-items-center mt-20 gap-10 grid  laptop:grid-cols-2'>
                <div className='m-5'>
                    <img src="image1.png" className='tablet:w-96 mobile:w-80 mobile:h-80  duration-700 hover:scale-105 cursor-pointer tablet:h-96' />
                    <div className='flex justify-between tablet:w-96 mt-3'>
                        <div>
                            <h1 className='text-[#292F36] text-xl font-bold'>Modern Kitchen</h1>
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
                            <h1 className='text-[#292F36] text-xl font-bold'>Modern Kitchen</h1>
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
                            <h1 className='text-[#292F36] text-xl font-bold'>Modern Kitchen</h1>
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
                            <h1 className='text-[#292F36] text-xl font-bold'>Modern Kitchen</h1>
                            <p className='text-[#292F36]'>Decor / Artchitecture</p>
                        </div>
                        <div className='w-12 h-12 rounded-full flex justify-center bg-gray-300'>
                            <MdKeyboardArrowRight className='text-3xl text-[#292F36] mt-2' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#c2ad96]'>
            <div className=' tablet:w-[900px] mx-auto mt-32 flex justify-around gap-10 flex-wrap py-20'>
                <div className='tablet:w-44'>
                    <h1 className='text-8xl text-yellow-800 font-bold'>12</h1>
                    <p>Year Of Experience</p>
                </div>
                <div className=' tablet:w-44'>
                    <h1 className='text-8xl text-yellow-800 font-bold'>85</h1>
                    <p>Year Of Experience</p>
                </div>
                <div className='tablet:w-44'>
                    <h1 className='text-8xl text-yellow-800 font-bold'>15</h1>
                    <p>Year Of Experience</p>
                </div>
                <div className=' tablet:w-44'>
                    <h1 className='text-8xl text-yellow-800 font-bold'>75</h1>
                    <p>Year Of Experience</p>
                </div>
            </div>
            </div>
          
        </div>
           
        </>
    )
}

export default Section5