import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { Link, useParams } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa"
import { IoCallOutline } from "react-icons/io5"
import { GiWorld } from 'react-icons/gi'
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import teamData from "../../data/team.json"
const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
};
const TeamDetail = (props) => {
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
    const filteredItems = teamData.filter(item => item.id === parseInt(param.id));
    const finalData = filteredItems[0]
    console.log("hello", finalData)
    return (
        <div>
            {/* *********** hero section ************** */}
            <div className='-z-10 relative mt-20'>
                <img
                    src="lazy.jpeg"
                    data-src="/teamBanner.jpeg"
                    alt="Team Image"
                    className={`loaded ? "loaded" : "loading" w-full `}
                    onLoad={() => setIsLoaded(true)}
                    loading='lazy'
                />
            </div>
            <div className='tablet:w-96 -z-10 mobile:w-60 p-10   tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-40 bg-white rounded-[30px] text-center   text-[#292F36]'>
                <h1 className='tablet:text-4xl mobile:text-2xl font'> Professional Single</h1>
                <p>Home / Team Single</p>
            </div>

            {/* ******************* section 1 ******************* */}

            <div className='tablet:w-[800px]  text-[#292F36]  mt-32 tablet:mx-auto mobile:mx-5 tablet:flex gap-10'>
                <div className='tablet:w-[800px]  text-[#292F36]  mt-32 tablet:mx-auto mobile:mx-5 tablet:flex gap-10'>
                    <div>
                    <img
                    src="lazy.jpeg"
                    data-src={finalData.image}
                    alt=""
                    className={`loaded ? "loaded" : "loading" tablet:w-[250px] tablet:h-[350px] rounded-3xl`}
                    onLoad={() => setIsLoaded(true)}
                    loading='lazy'
                />
                    </div>
                    <div className='tablet:w-96 mt-6'>
                        <h1 className='font text-3xl'>{finalData.heading}</h1>
                        <p>Designer</p>
                        <p className='py-3 text-sm'>{finalData.descriptions}</p>
                        <div className='flex gap-5 py-2'>
                            <FaRegEnvelope className='text-2xl text-[#CDA274] ' />
                            <p>info@yourdomain.com</p>
                        </div>
                        <div className='flex gap-5 py-2'>
                            <IoCallOutline className='text-2xl text-[#CDA274] ' />
                            <p>+1 (378) 400-1234</p>
                        </div>
                        <div className='flex gap-5 py-2'>
                            <GiWorld className='text-2xl text-[#CDA274] ' />
                            <p>www.yourdomain.com</p>
                        </div>
                        <div className='flex  text-[#292F36]  text-sm my-3  justify-between w-32'>
                            <FaFacebookF />
                            <BsTwitter />
                            <BiLogoLinkedin />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
            {/* ******************* section 2 **************** */}
            <div className='tablet:w-[800px] tablet:mx-auto mobile:mx-5 mt-20 text-[#292F36]'>
                <h1 className='text-3xl font'>Short Biography​</h1>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour
                    randomised words which don't look even slightly believable.
                    <br /><br />
                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.</p>
            </div>
            <div className='tablet:w-[800px] tablet:mx-auto mobile:mx-5 mt-20 tablet:flex gap-14 text-[#292F36]'>
                <div className='tablet:w-[600px]'>
                    <h1 className='text-xl font'>Simplicity and Functionality</h1>
                    <p className='text-sm mt-3'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.
                        <br /><br />
                        There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njecthumour</p>
                    <div className='flex tablet:w-72 mt-6 text-sm font-semibold justify-between'>
                        <h1>Project Design</h1>
                        <p>65%</p>
                    </div>
                    <img src='/lin1.jpeg' />
                    <div className='flex tablet:w-96 mt-3 text-sm font-semibold justify-between'>
                        <h1>Team Management</h1>
                        <p>95%</p>
                    </div>
                    <img src='/line2.jpeg' />
                    <div className='flex tablet:w-80 mt-3 text-sm font-semibold justify-between'>
                        <h1>Client Satisfaction</h1>
                        <p>75%</p>
                    </div>
                    <img src='/line3.jpeg' />
                </div>

                <div >
                    <div>
                        <h1 className='text-xl font'>Qustion And Answer</h1>
                        <p className='text-sm my-3'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>
                    </div>
                    <div className='bg-[#F4F0EC] rounded-3xl  tablet:w-[380px] px-5 py-6'>
                        <div className='tablet:w-[335px] flex justify-between'>
                            <h1 className=' text-sm mt-2 font-bold'>Website & Mobile App Design?</h1>
                            <div className='bg-white w-10 flex justify-center pt-3 h-10 rounded-full'><AiOutlineMinus /></div>
                        </div>
                        <p className='text-sm tablet:w-64 pt-2'>Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.</p>
                    </div>
                    <div className='border-2 border-[#CDA274] rounded-2xl py-2 tablet:w-[380px] flex justify-between px-5 my-5'>
                        <p className='text-sm font-bold mt-2'>How to Easy Successful Projects?</p>
                        <div className='bg-[#F4F0EC] w-10 flex justify-center pt-3 h-10 rounded-full'><AiOutlinePlus /></div>
                    </div>
                    <div className='border-2 border-[#CDA274] rounded-2xl py-2 tablet:w-[380px] flex justify-between px-5'>
                        <p className='text-sm font-bold mt-2'>International Trade Experience?</p>
                        <div className='bg-[#F4F0EC] w-10 flex justify-center pt-3 h-10 rounded-full'><AiOutlinePlus /></div>

                    </div>
                </div>
            </div>
            {/* ************************ section 3 ********************** */}

            <div className='bg-[#F4F0EC] text-center py-24 mt-40 tablet:mx-auto mobile:mx-5'>
                <h1 className='text-3xl mx-auto  mt-12 tablet:w-96  font text-[#292F36]'>What the People Thinks
                    About Us</h1>
                <div className='tablet:w-[850px] mx-auto mt-10  flex flex-wrap gap-5 justify-around'>
                    <img src="/Image (7).jpeg" className='w-48 h-72' />
                    <img src="/image 2.jpeg" className='w-48 h-72' />
                    <div className='bg-white tablet:w-52 mobile:w-48 rounded-[20px] pt-16'>
                        <h1 className='text-xl font '>Nattasha Julie</h1>
                        <p className='text-xs'>Design, Australia</p>
                        <div className='flex justify-between mx-auto mt-10 w-32'>
                            <FaFacebookF />
                            <BsTwitter />
                            <BiLogoLinkedin />
                            <FaInstagram />
                        </div>
                        <p className='text-md mt-10'>+1 (378) 400-1234<br />
                            julie@email.com</p>
                    </div>
                    <img src="/image 3.jpeg" className='w-48 h-72' />

                </div>
            </div>

            {/* ***************** section 4**************** */}
            <div className='tablet:w-[680px] tablet:mx-auto mobile:mx-5 text-center '>
                <h1 className='tablet:text-3xl mobile:text-2xl tablet:mx-auto mx-5 font text-center pt-36  tablet:w-96  text-[#292F36]'>
                    Contact Me</h1>
                <div className='mt-10 grid tablet:grid-cols-2 mobile:grid-cols-1 gap-10 mx-5'>
                    <input type='text' placeholder='Name' className='tablet:w-80 border-b-2 border-[#292F36] pb-2        ' />
                    <input type='Email' placeholder='Email' className='tablet:w-80 border-b-2 border-[#292F36] tablet:ml-10 pb-2' />
                </div>
                <input type='text' placeholder='Send Your Message' className='tablet:w-[700px] ml-5 mt-5 pt-5 pb-20 border-[#292F36] border-b-2' />
                <div className='flex tablet:w-[85%] mx-auto  mt-10'>
                    <input type="checkbox" className='w-5 mx-auto' />
                    <p className='text-[#CDA274] font-semibold  text-sm'>Save my name, email, and website in this browser for the next time I comment.</p>
                </div>
                <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-36 py-4 mt-20 text-white mx-auto'>Send Now &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#CDA274]' /></button>
            </div>
        </div>
    )
}

export default TeamDetail
