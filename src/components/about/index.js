import React from 'react'
import { useState, useEffect } from 'react';
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Link } from 'react-router-dom';
// import LazyLoad from 'react-lazyload';
const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
};
const AboutUs = () => {
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
    <>
      {/* **************** hero****************** */}
      <div className='-z-10 relative mt-20'>
        <img
          src="lazy.jpeg"
          data-src="banner.jpeg"
          alt=""
          className={`loaded ? "loaded" : "loading" w-full`}
          onLoad={() => setIsLoaded(true)}
          loading='lazy'
        />

      </div>
      <div className='tablet:w-96 -z-10 mobile:w-60 p-10  bg-white tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto  tablet:h-[800px] mobile:h-[650px]  rounded-[30px] text-center   text-[#292F36]'>
        <h1 className='tablet:text-4xl mobile:text-2xl font '>About Us</h1>
        <p>Home / About Us</p>
      </div>
      <div className='pt-20 rounded-[40px] tablet:mx-auto mobile:mx-2 text-center tablet:w-[600px] text-[#292F36] h-80 mt-40 border-[13px] border-[#F4F0EC]'>
        <h1 className='tablet:text-2xl mobile:text-lg mx-5  absolute font italic tablet:mx-10 tablet:w-[500px]'>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it<br /> <p className='text-xl mt-4 font-light'>-BUNNY WILLIAMS</p></h1>
      </div>




      {/* ************** section 1 ****************** */}

      <div className='tablet:flex tablet:w-[900px] tablet:mt-60 mobile:mt-40 mobile:mx-5 justify-between tablet:mx-auto'>
        <div className='tablet:w-96'>
          <h1 className='text-3xl font '>What We Do</h1><p className='py-3'>It is a long established fact that a reader will be distracted by the of readable content of a page
            when lookings at its layouts the points of using
            that it has a more-or-less normal.</p>
          <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-36 py-4 mt-5 text-white '>Over Concept &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#CDA274]' /></button>
        </div>
        <div>
          <img src="Image (6).jpeg" className='w-[450px] tablet:mt-0 mobile:mt-20' />
        </div>
      </div>
      {/* ************** section 2 ****************** */}

      <div className='tablet:flex tablet:w-[900px] tablet:mt-40 mobile:mt-40 mobile:mx-5 justify-between tablet:mx-auto'>
        <div>
          <img src="Photo (2).jpeg" className='w-[450px] rounded-[30px] tablet:mt-0 mobile:mt-20' />
        </div>
        <div className='tablet:w-96'>

          <h1 className='text-3xl font '>The End Result</h1><p className='py-3'>It is a long established fact that a reader will be distracted by the of readable content of a page
            when lookings at its layouts the points of using
            that it has a more-or-less normal.</p>
          <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-36 py-4 mt-5 text-white '>Our Portfolio &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#CDA274]' /></button>
        </div>
      </div>

      {/* ************** section 3 ****************** */}

      <div className='bg-[#F4F0EC] text-center py-24 mt-10 mx-auto'>
        <h1 className='text-3xl mx-auto  mt-32 tablet:w-96  font text-[#292F36]'>What the People Thinks
          About Us</h1>
        <div className='tablet:w-[850px] mx-auto mt-10  flex flex-wrap gap-5 justify-around'>
          <img src="Image (7).jpeg" className='w-48 h-72' />
          <img src="image 2.jpeg" className='w-48 h-72' />
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
          <img src="image 3.jpeg" className='w-48 h-72' />

        </div>
      </div>
      {/* ***************** section 4**************** */}
      <div className='tablet:w-[680px] mx-auto text-center '>
        <h1 className='tablet:text-3xl mobile:text-2xl tablet:mx-auto mx-5 font text-center pt-36  tablet:w-96  text-[#292F36]'>Creative project? Let's have
          a productive talk.</h1>
        <div className='mt-10 grid tablet:grid-cols-2 mobile:grid-cols-1 gap-10 mx-5'>
          <input type='text' placeholder='Name' className='tablet:w-80 border-b-2 border-[#292F36] pb-2        ' />
          <input type='Email' placeholder='Email' className='tablet:w-80 border-b-2 border-[#292F36] tablet:ml-10 pb-2' />
        </div>
        <input type='text' placeholder='Hello I am Interested In' className='tablet:w-[700px] mt-5 pt-5 pb-20 border-[#292F36] border-b-2' />
        <button className='bg-[#292F36] rounded-xl text-sm flex justify-center w-36 py-4 mt-20 text-white mx-auto'>Send Now &nbsp;<HiOutlineArrowNarrowRight className='text-xl text-[#CDA274]' /></button>
      </div>
    </>
  )
}

export default AboutUs