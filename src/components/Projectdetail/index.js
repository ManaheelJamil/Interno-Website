import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
// import { IoCallOutline } from "react-icons/io5"
// import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { Link, useParams } from 'react-router-dom';
import ProjectData from "../../data/Project.json"
const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
};
const Projectdetail = (props) => {
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
    const param = useParams()
    const filteredItems = ProjectData.filter(item => item.id === parseInt(param.id));
    const finalData = filteredItems[0]
    console.log("hello", finalData)
    return (
        <div>
            {/* *********** hero section ************** */}
            <img
            src="lazy.jpeg"
            data-src="/Banner.jpeg"
            alt=""
            className={`loaded ? "loaded" : "loading" mt-20 w-full`}
            onLoad={() => setIsLoaded(true)}
            loading='lazy'
        />
        
            {/* **************** section 1 *************** */}
            <div className='tablet:w-[1000px] tablet:mx-auto mobile:mx-5 mt-32 tablet:flex justify-between'>
                <div className='tablet:w-[45%] text-[#292F36] bg-[#F4F0EC] tablet:p-16 mobile:p-5 rounded-[40px] tablet:h-80 flex justify-around'>
                    <div className='font-bold tablet:text-xl font mobile:text-md space-y-5 '>
                        <h1>Client</h1>
                        <h1>Category</h1>
                        <h1>Tags</h1>
                        <h1>Date</h1>
                        <h1>link</h1>
                    </div>
                    <div className=' tablet:text-xl  mobile:text-md space-y-5 '>
                        {finalData.furtherDetails.map(detail => (
                            <div className=' tablet:text-xl  mobile:text-md space-y-5 '>
                                <p> {detail.client}</p>
                                <p> {detail.category}</p>
                                <p> {detail.Tag}</p>
                                <p> {detail.Date}</p>
                                <p> {detail.Link}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='tablet:w-[50%] tablet:mt-0 mobile:mt-10'>
                    <h1 className='text-4xl font text-[#292F36] mb-5'>{finalData.title}</h1>
                    <p>Step into the realm of minimalism with our serene bedroom design. Embracing the less-is-more philosophy, our minimal bedroom offers a tranquil oasis free from excess clutter and distractions.<br/><br/> A neutral color palette, sleek furniture, and unobtrusive decor create an atmosphere of calm and simplicity. Every element has been thoughtfully curated to promote relaxation and mindfulness. The absence of unnecessary adornments allows the mind to unwind and find solace in the uncomplicated beauty of the space. Whether it's the uncluttered surfaces, the soothing lighting, or the functional yet understated design, our minimal bedroom beckons you to experience the elegance of simplicity and find respite from the chaos of the outside world.</p>
                </div>
            </div>


            {/* *************** section 2 ********************** */}
            <div className=''>
                <img src="/Image (5).jpeg" className='tablet:w-[1000px] mt-44 tablet:mx-auto hover:scale-105 duration-700' />
                {/* <div className='w-20 h-20 mx-auto bg-white rounded-full hover:scale-105 duration-700 absolute align-middle tablet:top-80 mobile:top-32 right-0 left-0 p-6'><BsSearch className='text-[#CDA274]  text-2xl mx-auto font-bold' /></div> */}
            </div>
        </div>
    )
}

export default Projectdetail