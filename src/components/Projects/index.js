import React from 'react'
import { useState, useEffect } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom';
import ProjectData from "../../data/Project.json"
const Project = () => {
const[alldata , setAlldata]=useState(ProjectData)
function filterdata(category){
    const filteredItems = ProjectData.filter(item => item.category === category);
setAlldata(filteredItems)
}
console.log(alldata)
    return (
        <div>
            {/* *********** hero section ************** */}
            <div className='-z-10 relative mt-20' >
            <img
                    src="Image (4).jpeg"
                    alt=""
                    className={` w-full`}
                    
                />
                    
            </div>
            <div className='tablet:w-96 -z-10 mobile:w-60 p-10   tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-40 bg-white rounded-[30px] text-center   text-[#292F36]'>
                <h1 className='tablet:text-4xl mobile:text-2xl font'>Our Project</h1>
                <p>Home / Project</p>
            </div>

            {/* ************** section no 1 ****************** */}
            <div className='tablet:w-[800px] tablet:mx-auto mobile:mx-5  border-2 border-[#CDA274] rounded-[10px] flex flex-wrap mobile:justify-center tablet:justify-between mt-44'>
                <button className='w-44 h-16 hover:bg-[#CDA274]  rounded-[10px]'onClick={()=>filterdata("Bathroom")}>Bathroom</button>
                <button className='w-44 h-16 hover:bg-[#CDA274]  rounded-[10px]'onClick={()=>filterdata("Bedroom")}>Bed Room</button>
                <button className='w-44 h-16 hover:bg-[#CDA274]  rounded-[10px]'onClick={()=>filterdata("Kitchen")}>Kitchan</button>
                <button className='w-44 h-16 hover:bg-[#CDA274]  rounded-[10px]'onClick={()=>filterdata("Livingarea")}>Living Area</button>
            </div>

            {/* ************** section no 2 ****************** */}
            <div className='tablet:w-[1000px] mt-20 tablet:mx-auto mobile:mx-5 gap-10 grid tablet:grid-cols-2'>
                {alldata ? alldata.map((item) => {
                    return (
                        <div>
                            <Link to={"/Projectdetail/" + item.id}> <img src={item.image} className='w-[100%]' />
                                <div className='flex justify-between tablet:w-[100%] mt-3'>
                                    <div>
                                        <h1 className='text-[#292F36] text-xl font'>{item.title}</h1>
                                        <p className='text-[#292F36]'>{item.subTitle}</p>
                                    </div>
                                    <div className='w-12 h-12 rounded-full flex justify-center bg-gray-300'>
                                        <MdKeyboardArrowRight className='text-3xl text-[#292F36] mt-2' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }) : "loading....."
                }


            </div>
        </div>
    )
}

export default Project