import React from 'react'
import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Link } from 'react-router-dom';
import ServiceData from "../../data/Services.json"
const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
};

const Services = () => {
    const [loaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let observer = new window.IntersectionObserver(function (entries, self) {
            console.log("entries", entries);
            console.log("self", self);
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadImages(entry.target);
                    self.unobserve(entry.target);
                }
            });
        }, config);

        const imgs = document.querySelectorAll("[data-src]");
        imgs.forEach((img) => {
            observer.observe(img);
        });
        return () => {
            imgs.forEach((img) => {
                observer.unobserve(img);
            });
        };
    }, []);

    const loadImages = (image) => {
        image.src = image.dataset.src;
    };
    return (
        <div>
            {/* *************** hero section ********************* */}

            <div className='-z-10 relative mt-20'>
                <img
                    src="lazy.jpeg"
                    data-src="Photo.jpeg"
                    alt=""
                    className={`loaded ? "loaded" : "loading" w-full `}
                    onLoad={() => setIsLoaded(true)}
                    loading='lazy'
                />
            </div>
            <div className='-z-10 tablet:w-96 mobile:w-60 p-10   tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-40 bg-white rounded-[30px] text-center   text-[#292F36]'>
                <h1 className='tablet:text-4xl mobile:text-2xl font'>Services</h1>
                <p>Home / Services</p>
            </div>

            {/* ************** section 1 ******************* */}

            <div className='laptop:w-[900px] tablet:w-[600px] tablet:gap-20 mobile:gap-5 mx-auto grid laptop:grid-cols-3 tablet:grid-cols-2  justify-center mt-32'>
                {ServiceData ? ServiceData.map((item) => {
                    return (<div className='w-72 px-10 h-64 pt-10 hover:bg-[#F4F0EC]  cursor-pointer hover:rounded-[30px] text-center tablet:border-r tablet:border-l tablet:border-b-0 mobile:border-b'>
                        <Link to='/ServiceSample'> <h1 className='text-xl  font text-[#292F36]'>{item.subheading}</h1>
                            <p className='text-[#292F36]  mt-3'>There are many variations of the passages of lorem Ipsum from
                                available, majority.</p>
                            <button className='rounded-xl text-sm mx-auto flex justify-center w-36 py-4 mt-5 font-bold text-[#292F36]'>Read More &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-yellow-700' /></button>
                        </Link>
                    </div>)
                }) : "loading......"
                }
            </div>

            {/* ************** section 2 ******************* */}

            <div className='bg-[#F4F0EC]  mt-44 mx-auto rounded-[50px] tablet:w-[1000px]' >

                <h1 className='text-4xl font text-center text-[#292F36] pt-32'>How We Work</h1>
                <p className='text-[#292F36] tablet:mx-44 mobile:mx-5 mobile:text-center mt-5'>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className='flex tablet:w-[800px] tablet:mt-40 mobile:flex-col-reverse tablet:flex-row mobile:mt-40 mobile:mx-5 justify-between tablet:mx-auto'>
                    <div>
                        <img src="Image.jpeg" className='w-[350px] rounded-[30px] tablet:mt-0 mobile:mt-20' />
                    </div>
                    <div className='tablet:w-96 mt-10'>
                        <div className='flex justify-between'>
                            <img src='logo1.jpeg' className='w-24' />
                            <h1 className='text-8xl text-white font-bold'>01</h1>
                        </div>
                        <h1 className='text-3xl mt-20 font'>Concept & Details</h1><p className='py-3'>It is a long established fact  will be distracted.
                            Lorem Ipsum is simply dummy from text of the
                            and typesetting indufstry. </p>
                    </div>
                </div>


                <div className='tablet:flex tablet:w-[800px] tablet:mt-40 mobile:mt-40 mobile:mx-5 justify-between tablet:mx-auto'>
                    <div className='tablet:w-96 mt-10'>
                        <div className='flex justify-between'>
                            <img src='icon.jpeg' className='w-24' />
                            <h1 className='text-8xl text-white font-bold'>02</h1>
                        </div>
                        <h1 className='text-3xl mt-20 font-bold'>Idea for Work</h1><p className='py-3'>It is a long established fact  will be distracted.
                            Lorem Ipsum is simply dummy from text of the
                            and typesetting indufstry. </p>
                    </div>
                    <div>
                        <img src="Image (1).jpeg" className='w-[350px] rounded-[30px] tablet:mt-0 mobile:mt-20' />
                    </div>
                </div>




                <div className='flex tablet:w-[800px] tablet:mt-40 mobile:mt-40  mobile:flex-col-reverse tablet:flex-row  mobile:mx-5 justify-between tablet:mx-auto'>
                    <div>
                        <img src="Image (2).jpeg" className='w-[350px] rounded-[30px] tablet:mt-0 mobile:mt-20' />
                    </div>
                    <div className='tablet:w-96 mt-10'>
                        <div className='flex justify-between'>
                            <img src='Icon1.jpeg' className='w-24' />
                            <h1 className='text-8xl text-white font-bold'>03</h1>
                        </div>
                        <h1 className='text-3xl mt-20 font '>Design</h1><p className='py-3'>It is a long established fact  will be distracted.
                            Lorem Ipsum is simply dummy from text of the
                            and typesetting indufstry. </p>
                    </div>
                </div>


                <div className='tablet:flex  tablet:w-[800px] tablet:mt-40 mobile:mt-40  mobile:mx-5 justify-between tablet:mx-auto'>
                    <div className='tablet:w-96 mt-10'>
                        <div className='flex justify-between'>
                            <img src='Icon2.jpeg' className='w-24' />
                            <h1 className='text-8xl text-white font-bold'>04</h1>
                        </div>
                        <h1 className='text-3xl mt-20 font'>Perfection</h1><p className='py-3'>It is a long established fact  will be distracted.
                            Lorem Ipsum is simply dummy from text of the
                            and typesetting indufstry. </p>
                    </div>
                    <div>
                        <img src="Image (3).jpeg" className='w-[350px] rounded-[30px] tablet:mt-0 mobile:mt-20' />
                    </div>
                </div>
            </div>


            {/* ********************** section 3 *********************** */}

            <div className='laptop:w-[1000px] mx-auto py-10 mobile:mt-20  rounded-[50px] bg-[#292F36] text-white tablet:mt-44 text-center'>
                <h1 className='tablet:text-4xl mobile:text-2xl font py-5'>Wanna join the interno?</h1>
                <p>It is a long established fact  will be distracted.</p>
                <button className=' bg-[#CDA274] rounded-xl text-sm flex mx-auto justify-center w-48 py-5 mt-5 text-white '>Contact With Us&nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#292F36]' /></button>
            </div>
        </div>
    )
}

export default Services