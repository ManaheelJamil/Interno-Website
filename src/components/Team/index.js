import React from 'react'
import { useState, useEffect } from 'react';
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { Link } from 'react-router-dom';
import teamData from "../../data/team.json"
const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
};
const Team = () => {
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
                    data-src="team.jpeg"
                    alt=""
                    className={`loaded ? "loaded" : "loading" w-full `}
                    onLoad={() => setIsLoaded(true)}
                    loading='lazy'
                /></div>

            <div className='tablet:w-96 mobile:w-60 p-10 -z-10  tablet:top-52 mobile:top-24 left-0 right-0 absolute mx-auto desktop:h-52 laptop:h-40 bg-white rounded-[30px] text-center   text-[#292F36]'>
                <h1 className='tablet:text-4xl mobile:text-2xl font'>Our Professional</h1>
                <p>Home / Team</p>
            </div>

            {/* ********************* sectiion 1 ******************0 */}

            <div className='tablet:w-[900px]  tablet:mx-auto mobile:mx-16 mt-40 grid laptop:grid-cols-4 gap-10 tablet:grid-cols-3 '>
                {teamData ? teamData.map((item, index) => {
                    return (
                        <div className='text-center tablet:w-48  '>
                            <Link to={"/TeamDetail/" + item.id}>  
                            <img
                            src="lazy.jpeg"
                            data-src={item.image}
                            alt=""
                            className={`loaded ? "loaded" : "loading" tablet:w-48 tablet:h-72 rounded-3xl`}
                            onLoad={() => setIsLoaded(true)}
                            loading='lazy'
                        />
                                <div className='mobile:w-72 tablet:w-48'>
                                    <h1 className='text-2xl font mt-2 text-[#292F36]'>{item.heading}</h1>
                                    <p className='text-sm'>Design , Australia</p>
                                    <div className='flex  text-[#292F36]  text-sm my-3  justify-center mt-2 gap-10'>
                                        <FaFacebookF />
                                        <BsTwitter />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }) : "loading...."
                }
            </div>
        </div>
    )
}

export default Team