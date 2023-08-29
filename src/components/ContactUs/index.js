import React from 'react'
import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa"
import { IoCallOutline } from "react-icons/io5"
import { GiWorld } from 'react-icons/gi'
const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
};
const ContactUs = () => {
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
                    data-src="contactbanner.jpeg"
                    alt=""
                    className={`loaded ? "loaded" : "loading" w-full`}
                    onLoad={() => setIsLoaded(true)}
                    loading='lazy'
                />
            </div>
            <div className='tablet:w-96 -z-10 mobile:w-60 p-10   tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-40 bg-white rounded-[30px] text-center   text-[#292F36]'>
                <h1 className='tablet:text-4xl mobile:text-2xl font'>Contact Us</h1>
                <p>Home / Contact</p>
            </div>

            {/* ******************** section 1 ****************** */}
            <h1 className='tablet:w-[600px] tablet:mx-auto mobile:mx-5  text-[#292F36] font tablet:text-4xl mobile:text-2xl text-center mt-44 '>We love meeting new people and helping them.</h1>
            <div className='tablet:w-[900px] tablet:mx-auto mobile:mx-5 text-[#292F36] mt-10 tablet:flex' >
                <div className='bg-[#F4F0EC] tablet:w-60 h-80 pt-12 px-5 rounded-[40px]'>
                    <div className='flex gap-5 py-5'>
                        <FaRegEnvelope className='text-xl text-[#CDA274] ' />
                        <p className='text-sm'>info@yourdomain.com</p>
                    </div>
                    <div className='flex gap-5 py-5'>
                        <IoCallOutline className='text-xl text-[#CDA274] ' />
                        <p className='text-sm'>+1 (378) 400-1234</p>
                    </div>
                    <div className='flex gap-5 py-5'>
                        <GiWorld className='text-xl text-[#CDA274] ' />
                        <p className='text-sm'>www.yourdomain.com</p>
                    </div>
                    <div className='flex  text-[#292F36]  text-sm my-3  justify-between w-32'>
                        <FaFacebookF />
                        <BsTwitter />
                        <BiLogoLinkedin />
                        <FaInstagram />
                    </div>
                </div>
                <div className='tablet:w-[700px] tablet:mx-auto mobile:mx-5 '>
                    <div className='tablet:w-[87%] text-center '>
                        <div className='mt-5 grid tablet:grid-cols-2 mobile:grid-cols-1 gap-10 tablet:mx-5 mobile:mx-0'>
                            <input type='text' placeholder='Name' className='border-b-2 border-[#292F36] pb-2' />
                            <input type='Email' placeholder='Email' className=' border-b-2 border-[#292F36]  pb-2' />
                            <input type='text' placeholder='Website' className='border-b-2 border-[#292F36] pb-2' />
                            <input type='Email' placeholder='Phone' className=' border-b-2 border-[#292F36]  pb-2' />
                        </div>
                        <input type='text' placeholder='Hello I am Interested In' className='tablet:w-[96%] mobile:w-[90%] mt-5 pt-5 pb-20 border-[#292F36] border-b-2' />
                    </div>
                    <div className='flex justify-end tablet:w-[87%]'>
                        <button className='bg-[#292F36] rounded-xl ml-5 text-md flex justify-center w-40 py-4 mt-5 text-white '>Send Now &nbsp;<HiOutlineArrowNarrowRight className='text-2xl text-[#CDA274]' /></button>

                    </div>

                </div>
            </div>

            {/* ****************** section 2 ****************** */}

            <div className='tablet:w-[900px] mt-44 tablet:mx-auto mobile:mx-5 '>
                <img src="/Map.jpeg" />
            </div>
        </div>
    )
}

export default ContactUs
