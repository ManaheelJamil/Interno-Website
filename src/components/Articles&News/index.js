import React from 'react'
import { useState, useEffect } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom';
import BlogData from "../../data/Blog.json";
const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
};
const Articles = () => {
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
          data-src="Image_laceholder.jpeg"
          alt=""
          className={`loaded ? "loaded" : "loading" w-full`}
          onLoad={() => setIsLoaded(true)}
          loading='lazy'
        />
      </div>
      <div className='tablet:w-96 -z-10 mobile:w-60 p-10   tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-40 bg-white rounded-[30px] text-center   text-[#292F36]'>
        <h1 className='tablet:text-4xl mobile:text-2xl font'>Articles & News</h1>
        <p>Home / Blog</p>
      </div>

      {/* ********************* section no 1 *************************** */}
      <h1 className='font text-4xl tablet:w-[950px] mx-auto mt-44'>Latest Post</h1>
      <div className='tablet:w-[900px] tablet:mx-auto mobile:mx-5 tablet:flex mt-5 justify-between'>
        <div>
          <img src="Image (8).jpeg" className='tablet:w-[90%]' />
        </div>
        <div className='tablet:w-[50%] mt-10'>
          <h1 className='font text-2xl pb-5'>Low Cost Latest Invented Interior Designing Ideas</h1>
          <p>Elevate your interior inexpensively: try peel-and-stick textured panels for walls and craft custom lighting from everyday items.<br/><br/> Upcycled painted furniture and budget-friendly hanging planters create a stylish yet affordable ambiance.</p>
          <div className='flex justify-between tablet:w-96 mt-3'>
            <div>

              <p className='text-[#292F36] mt-5'>26, December,2022</p>
            </div>
            <div className='w-12 h-12 rounded-full flex justify-center bg-[#F4F0EC]'>
              <MdKeyboardArrowRight className='text-3xl text-[#292F36] mt-2' />
            </div>
          </div>
        </div>
      </div>

      {/* ********************* section no 2 *************************** */}
      <div className='tablet:w-[950px] mx-auto mt-44'>
        <h1 className='font text-4xl '>Articles & News</h1>
        <div id="blog">
          <div className='tablet:w-[900px] mx-auto grid laptop:grid-cols-3 gap-5 tablet:grid-cols-2 justify-around mt-10'>
            {BlogData ? BlogData.map((item, index) => {
              return (
                <div className='w-64 p-3 border rounded-[40px] hover:bg-[#F4F0EC] cursor-pointer'>
                  <Link to={"/BlogDetails/" + item.id}> <img src={item.image} className=' duration-700 hover:scale-105 cursor-pointer rounded-t-[40px]' />
                    <h1 className='text-xl text-[#292F36] mt-2  font  font-semibold'>{item.heading}</h1>
                    <div className='flex  px-2 justify-between tablet:w-56 mt-10'>
                      <div>
                        <p className='text-[#292F36] mt-2'>26 December,2022 </p>
                      </div>
                      <div className='w-10 h-10 rounded-full flex justify-center bg-[#F4F0EC]'>
                        <MdKeyboardArrowRight className='text-3xl text-[#292F36] mt-1' />
                      </div>
                    </div></Link>
                </div>
              )
            }) : "loading..."
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles 