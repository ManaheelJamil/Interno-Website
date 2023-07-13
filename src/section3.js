import React from 'react'

const section3 = () => {
    return (
        <>
            <div id="services" className='laptop:w-[950px] tablet:w-[850px] mx-auto laptop:h-[500px] pb-10  rounded-[50px] mt-32 bg-[#CDA274]'>
                <h1 className='text-[#292F36] font-bold text-4xl  tablet:w-[500px] pt-20  mx-auto text-center'>What the People Thinks
                    About Us</h1>
                <div className='grid laptop:grid-cols-3 tablet:grid-cols-2 p-5 mobile:gap-5 tablet:gap-10  laptop:w-[900px] tablet:w-[800px] mx-auto mt-10'>
                    <div className='bg-white rounded-3xl laptop:w-72  duration-700 hover:scale-105 cursor-pointer h-60 text-[#292F36]'>
                        <div className='flex gap-5 mx-5 pt-14'>
                            <img src='1icon.jpg' className='w-14 h-14 rounded-full' />
                            <div>
                                <h1 className='text-xl font-bold'>Nattasha Mith</h1>
                                <p>Sydney, USA</p>
                            </div>
                        </div>
                        <p className='mt-5 mx-5'>Lorem Ipsum is simply dummy
                            text of the typesetting industry.
                            Ipsum has been.</p>
                    </div>
                    <div className='bg-white rounded-3xl laptop:w-72 duration-700 hover:scale-105 cursor-pointer h-60 text-[#292F36]'>
                        <div className='flex gap-5 mx-5 pt-14'>
                            <img src='2icon.jpg' className='w-14 h-14 rounded-full' />
                            <div>
                                <h1 className='text-xl font-bold'>Raymond Galario</h1>
                                <p>Sydney, Australia</p>
                            </div>
                        </div>
                        <p className='mt-5 mx-5'>Lorem Ipsum is simply dummy
                            text of the typesetting industry.
                            Ipsum has been.</p>
                    </div>
                    <div className='bg-white rounded-3xl laptop:w-72 duration-700 hover:scale-105 cursor-pointer h-60 text-[#292F36]'>
                        <div className='flex gap-5 mx-5 pt-14'>
                            <img src='3icon.jpg' className='w-14 h-14 rounded-full' />
                            <div>
                                <h1 className='text-xl font-bold'>Benny Roll</h1>
                                <p>Sydney, New York</p>
                            </div>
                        </div>
                        <p className='mt-5 mx-5'>Lorem Ipsum is simply dummy
                            text of the typesetting industry.
                            Ipsum has been.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default section3