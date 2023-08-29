import React from 'react'
import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
};
const ServiceSample = () => {
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
            {/* *********** hero section ************** */}
            <div className='-z-10 relative mt-20'>
            <img
                    src="lazy.jpeg"
                    data-src="Photo.jpeg"
                    alt=""
                    className={`loaded ? "loaded" : "loading" w-full`}
                    onLoad={() => setIsLoaded(true)}
                    loading='lazy'
                />
            
            </div>
            <div className='tablet:w-96 -z-10 mobile:w-60 p-10   tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-40 bg-white rounded-[30px] text-center   text-[#292F36]'>
                <h1 className='tablet:text-4xl mobile:text-2xl font'>Service Single</h1>
                <p>Home / Service Single</p>
            </div>

            {/* *************section1**************** */}

            <div className='tablet:w-[900px] mx-auto mt-44 tablet:flex m-10 gap-10 justify-between'>


                <div className='tablet:w-[50%] m-5'>
                    <h1 className='text-4xl font text-[#3d444b]'>We set the trends of
                        modern living
                        Services..</h1>
                </div>
                <div className='tablet:w-[70%] m-5'>
                    <p className=' text-lg text-[#CDA274] font-semibold'>It is a long established fact that a reader will be distracted by the of readable content of a page.</p>

                    <p className='text-[#292F36] my-10'> when lookings at its layouts the points spriof using that it has a more
                        less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>
                    <p>when lookings at its layouts the points spriof using that it has a more
                        less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>
                </div>



            </div>

            {/* ******************* section 2******************* */}

            <div id="pages" className='flex flex-wrap justify-around mt-40 gap-10 m-10 tablet:w-[900px] align-middle items-center mx-auto'>
                <img src='01.jpeg' className='h-10' />
                <img src='02.jpeg' className='h-20' />
                <img src='03 (1).jpeg' className='h-10' />
                <img src='04.jpeg' className='h-10' />
                <img src='05.jpeg' className='h-10' />
            </div>
            {/* ************************** section 3 *********************** */}


            <img src='Video.jpeg' className='mx-auto my-44 tablet:w-[900px] hover:scale-105 duration-700' />

            {/* **************** section 4 ****************** */}

            <div className='tablet:w-[800px] tablet:mx-auto mx-5 tablet:flex justify-between'>
                <div>
                    <h1 className='text-4xl font text-[#3d444b]'>Use of Interior</h1>
                    <ol className='3d444b space-y-5 m-5 list-decimal'>
                        <li>We provide high quality design services.</li>
                        <li>Project on time and Latest Design.</li>
                        <li>Scientific Skills For getting a better result.</li>
                        <li>Renovations Benefit of Service</li>
                        <li>We are confident about our projects.</li>
                    </ol>
                </div>
                <div>
                    <h1 className='text-4xl font text-[#3d444b]'>Make An Art</h1>
                    <ol className='3d444b space-y-5 m-5 list-decimal'>
                        <li>We provide high quality design services.</li>
                        <li>Project on time and Latest Design.</li>
                        <li>Scientific Skills For getting a better result.</li>
                        <li>Renovations Benefit of Service</li>
                        <li>We are confident about our projects.</li>
                    </ol>
                </div>
            </div>

            {/* ************* section 5 **************** */}
            <div className='tablet:flex tablet:w-[900px] tablet:mt-40 mobile:mt-40 mobile:mx-5 justify-between tablet:mx-auto'>
                <div>
                    <img src="ban.jpeg" className='w-[450px] tablet:h-60 rounded-[50px] tablet:mt-0 mobile:mt-20' />
                </div>
                <div className='tablet:w-80 tablet:mt-0 mobile:mt-10'>

                    <h1 className='text-3xl font text-[#292F36]'>We love design.That's how we got here.</h1><p className='py-3'>It is a long established fact that a reader will be distracted by the of readable content .</p>
                    <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-44 py-4 mt-5 text-white '>Our Portfolio &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#CDA274]' /></button>
                </div>
            </div>

            {/* **************** section 6 ******************* */}

            <div className='bg-[#F4F0EC]'>
                <div className=' tablet:w-[1000px] mx-auto mt-32 flex justify-around gap-10 flex-wrap py-20'>
                    <div className='tablet:w-52 mx-auto border-r-2 px-5 border-l-2 border-[#e2c5a6]'>
                        <h1 className='text-7xl text-[#b78f64] text-center font-semibold'>12</h1>
                        <p className='text-md text-[#292F36]  text-center  mt-10 '>Year Of Experience</p>
                    </div>
                    <div className=' tablet:w-52 mx-auto border-l-2 px-5 border-r-2 border-[#e2c5a6]'>
                        <h1 className='text-7xl text-[#b78f64] text-center font-semibold'>85</h1>
                        <p className='text-md text-[#292F36] mt-10  text-center  '>Success Project</p>
                    </div>
                    <div className='tablet:w-52 mx-auto border-l-2 px-5 border-r-2 border-[#e2c5a6]'>
                        <h1 className='text-7xl text-[#b78f64] text-center font-semibold'>15</h1>
                        <p className='text-md text-[#292F36] mt-10  text-center '>Active Project</p>
                    </div>
                    <div className=' tablet:w-52 mx-auto border-l-2 px-5 border-r-2 border-[#e2c5a6]'>
                        <h1 className='text-7xl text-[#b78f64] text-center font-semibold'>75</h1>
                        <p className='text-md text-[#292F36] mt-10  text-center '>Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSample
