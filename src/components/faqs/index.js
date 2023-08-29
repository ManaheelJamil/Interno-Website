import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { useState, useEffect } from 'react';
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa"
const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
};
const Faqs = () => {
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
                    data-src="faqs.jpeg"
                    alt=""
                    className={`loaded ? "loaded" : "loading" w-full`}
                    onLoad={() => setIsLoaded(true)}
                    loading='lazy'
                />

            </div>
            <div className='tablet:w-96 -z-10 mobile:w-60 p-10   tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-40 bg-white rounded-[30px] text-center   text-[#292F36]'>
                <h1 className='tablet:text-4xl mobile:text-2xl font'>Faq's</h1>
                <p>Home / Faq</p>
            </div>

            {/* ******************* section 1 ******************* */}
            <h1 className='tablet:w-[600px] tablet:mx-auto mobile:mx-5  text-[#292F36] font text-4xl text-center mt-44 '>Every Question Answered</h1>
            <div className='tablet:w-[800px] gap-10 tablet:mx-auto mobile:mx-5 tablet:flex-row mobile:flex  mobile:flex-col-reverse  tablet:mt-20 tablet:flex'>
                <div className='mt-5 tablet:mx-auto mobile:mx-5'>
                    <div className='flex text-md font font-bold tablet:w-96 justify-between border-b-2 border-[#CDA274] py-4  text-[#292F36] '>
                        <h1>What is the Hipcouch Interior Design Service?</h1>
                        <FaAngleRight className='mt-1' />
                    </div>
                    <div className='flex text-md font font-bold tablet:w-96 justify-between  py-4  text-[#292F36] '>
                        <h1 className='text-[#CDA274]'>So, how exactly does this work?</h1>
                        <FaAngleRight className='rotate-90' />
                    </div>
                    < p className='tablet:w-96'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
                        vitae turpmaximus.posuere in.Contrary popular belief.
                        There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                    <div className='flex text-md font font-bold tablet:w-96 justify-between border-b-2 border-[#CDA274] py-4  text-[#292F36] '>
                        <h1>So, how exactly does this work?</h1>
                        <FaAngleRight />
                    </div>
                    <div className='flex text-md font font-bold tablet:w-96 justify-between border-b-2 border-[#CDA274] py-4  text-[#292F36] '>
                        <h1>So, how exactly does this work?</h1>
                        <FaAngleRight />
                    </div>
                    <div className='flex text-md font font-bold tablet:w-96 justify-between border-b-2 border-[#CDA274] py-4  text-[#292F36] '>
                        <h1>So, how exactly does this work?</h1>
                        <FaAngleRight />
                    </div>
                </div>
                <div>
                    <img src='faqs.jpeg' className='tablet:w-[700px] tablet:mt-0 mobile:mt-10' />
                </div>
            </div>

            {/* ******************* section 2 ******************* */}
            <h1 className='tablet:w-[600px] tablet:mx-auto mobile:mx-5  text-[#292F36] font text-4xl  text-center tablet:mt-44  mobile:mt-20'>Project related questions</h1>
            <div className='tablet:w-[800px] gap-10 tablet:mx-auto mobile:mx-5  tablet:mt-20 tablet:flex'>
                <div>
                    <img src='faqs2.jpeg' className='tablet:w-[700px] tablet:mt-0 mobile:mt-10' />
                </div>
                <div className='mt-5 tablet:mx-auto mobile:mx-5'>
                    <div className='flex text-md font font-bold tablet:w-96 justify-between border-b-2 border-[#CDA274] py-4  text-[#292F36] '>
                        <h1>How long does it take?</h1>
                        <FaAngleRight className='mt-1' />
                    </div>
                    <div className='flex text-md font font-bold tablet:w-96 justify-between  py-4  text-[#292F36] '>
                        <h1 className='text-[#CDA274]'>Can I use my existing furnishings?</h1>
                        <FaAngleRight className='rotate-90' />
                    </div>
                    < p className='tablet:w-96'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
                        vitae turpmaximus.posuere in.Contrary popular belief.
                        There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                    <div className='flex text-md font font-bold tablet:w-96 justify-between border-b-2 border-[#CDA274] py-4  text-[#292F36] '>
                        <h1>I put into redesigning my interior?</h1>
                        <FaAngleRight />
                    </div>
                    <div className='flex text-md font font-bold tablet:w-96 justify-between border-b-2 border-[#CDA274] py-4  text-[#292F36] '>
                        <h1>What do your services cost?</h1>
                        <FaAngleRight />
                    </div>
                    <div className='flex text-md font font-bold tablet:w-96 justify-between border-b-2 border-[#CDA274] py-4  text-[#292F36] '>
                        <h1>Do you offer free consultations?</h1>
                        <FaAngleRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
