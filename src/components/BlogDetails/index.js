import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { Link, useParams } from 'react-router-dom';
import BlogData from "../../data/Blog.json"
const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
};
const BlogDetails = (props) => {
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
  const filteredItems = BlogData.filter(item => item.id === parseInt(param.id));
  const finalData = filteredItems[0]
  console.log("hello", finalData)
  return (
    <div>

      {/* *********** hero section ************** */}

      <img
        src="lazy.jpeg"
        data-src="/Banner (3).jpeg"
        alt=""
        className={`loaded ? "loaded" : "loading" mt-20 w-full`}
        onLoad={() => setIsLoaded(true)}
        loading='lazy'
      />


      {/* ***************** section 1 **************** */}
      <div className='tablet:w-[900px] tablet:mx-auto mobile:mx-5 mt-32'>
        <h1 className='font tablet:text-5xl mobile:text-3xl tablet:w-[70%] text-[#292F36] '>{finalData.heading}
        </h1>
        <img src={finalData.image} className='tablet:w-[85%] mt-5' alt="one" />
        <div className='tablet:w-[85%] flex justify-between mt-7 text-[#292F36] '>
          <p>26 December,2022 </p>
          <p>Interior / Design / Home / Decore</p>
        </div>
        <p className='text-[#292F36]  mt-10 tablet:w-[85%] text-xl'>{finalData.description}</p>
        <div className='tablet:w-[85%]  text-center text-[#CDA274] bg-[#F4F0EC] rounded-[50px] h-60'>

          <p className='italic font text-2xl mt-20 pt-24'>The details are not the details.<br />
            They make the design.</p>
        </div>
        <h1 className='font text-5xl tablet:w-[70%] text-[#292F36] tablet:mt-10 mobile:mt-20 '>Design sprints are great</h1>
        <p className='mt-3 text-lg tablet:w-[85%] text-[#292F36]'>Design sprints are a remarkable innovation in problem-solving. These time-bound, collaborative workshops gather diverse perspectives to swiftly ideate, prototype, and test solutions.</p>
        <p className='tablet:w-[70%] mt-5'>1
          Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br /><br />
          2
          Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br /><br />
          3
          Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        <img src={finalData.image} className='tablet:w-[85%] my-10 ' />
        <p className='tablet:w-[85%] text-lg'>Their structured approach fosters creativity, accelerates decision-making, and minimizes risks by rapidly validating concepts. Design sprints have proven to be a game-changer, offering an efficient way to tackle challenges and drive innovation while keeping user needs at the forefront.</p>
        <div className='tablet:w-[85%] text-[#292F36] mt-10 tablet:flex justify-between'>
          <div className='flex space-x-5'>
            <h1 className='text-xl mt-3 font-bold font'>Tags</h1>
            <button className='bg-[#292F36] text-white rounded-xl w-32 py-4'>Kitchen</button>
            <button className='bg-[#F4F0EC] text-[#292F36] rounded-xl w-32 py-4'>Bedroom</button>
          </div>
          <div className='flex justify-between mt-3 w-44'>
            <FaFacebookF />
            <BsTwitter />
            <BiLogoLinkedin />
            <FaInstagram />
          </div>
        </div>
        <h1 className='font text-3xl mt-32 tablet:w-[70%] text-[#292F36] '>Leave a Reply
        </h1>
      </div>

      {/* ***************** section 4**************** */}
      <div className='tablet:w-[950px] mx-auto'>
        <div className='tablet:w-[87%] text-center '>
          <div className='mt-10 grid tablet:grid-cols-2 mobile:grid-cols-1 gap-10 mx-5'>
            <input type='text' placeholder='Name' className='border-b-2 border-[#292F36] pb-2' />
            <input type='Email' placeholder='Email' className=' border-b-2 border-[#292F36]  pb-2' />
            <input type='text' placeholder='Website' className='border-b-2 border-[#292F36] pb-2' />
            <input type='Email' placeholder='Phone' className=' border-b-2 border-[#292F36]  pb-2' />
          </div>
          <input type='text' placeholder='Hello I am Interested In' className='tablet:w-[96%] mobile:w-[90%] mt-5 pt-5 pb-20 border-[#292F36] border-b-2' />
        </div>
        <div className='flex tablet:w-[85%] ml-5 mt-10'>
          <input type="checkbox" className='w-5' />
          <p className='text-[#CDA274] font-semibold ml-2 text-xl'>Save my name, email, and website in this browser for the next time I comment.</p>
        </div>
        <button className='bg-[#292F36] rounded-2xl ml-5 text-md flex justify-center w-44 py-5 mt-10 text-white '>Send Now &nbsp;<HiOutlineArrowNarrowRight className='text-2xl text-[#CDA274]' /></button>

      </div>
    </div>
  )
}

export default BlogDetails