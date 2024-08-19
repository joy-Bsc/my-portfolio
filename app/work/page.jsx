"use client"
import {motion} from "framer-motion";
import { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight,BsGithub } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num:'01',
        category:'MERN Stack',
        title:'E-commerce Website',
        description:'This is mern stack e-commerce website. Which is build by using react, nodejs, express and mongodb,in backend I used nodejs and express for server side and mongodb for database and in frontend I used vite+react for client side.And I used stripe for payment gateway.I use zusstand for state management and I used bootstarp for styling.',
        stack:[{name:'html5'}, {name:'css3'}, {name:'javascript'}, {name:'react'}, {name:'nodejs'}, {name:'express'}, {name:'mongodb'}],
        image:'/assets/work/thumb1.png',
        live:'https://www.google.com',
        github:'https://github.com/joy-Bsc/MERN-E-Commerce',
        ScreenShot:'https://drive.google.com.'
    },
    {
        num:'02',
        category:'MERN Stack',
        title:'Task Manager',
        description:'This is mern stack task manager website. Which is build by using react, nodejs, express and mongodb,in backend I used nodejs and express for server side and mongodb for database and in frontend I used react for client side.And I used redux for state management and I used bootstarp for styling.',
        stack:[{name:'html5'}, {name:'css3'}, {name:'javascript'}, {name:'react'}, {name:'nodejs'}, {name:'express'}, {name:'mongodb'}],
        image:'/assets/work/thumb2.png',
        live:'https://www.google.com',
        github:'https://github.com/joy-Bsc/Task-Management',
        ScreenShot:'https://drive.google.com.'
    },
    {
        num:'03',
        category:'MERN Stack',
        title:'Inventory Management System',
        description:'This is mern stack project. Which is build by using react, nodejs, express and mongodb,in backend I used nodejs and express for server side and mongodb for database and in frontend I used react for client side.And I used redux for state management and I used bootstarp for styling.',
        stack:[{name:'html5'}, {name:'css3'}, {name:'javascript'}, {name:'react'}],
        image:'/assets/work/thumb3.png',
        live:'https://www.google.com',
        github:'https://github.com/joy-Bsc/Inventory-Management',
        ScreenShot:'https://drive.google.com.'
    },
    {
        num:'04',
        category:'MERN Stack',
        title:'Simple Table',
        description:'This is mern stack project. Which is build by using react, nodejs, express and mongodb,in backend I used nodejs and express for server side and mongodb for database and in frontend I used react for client side.And This is simple table for CRUD operation and I used bootstarp for styling.',
        stack:[{name:'html5'}, {name:'css3'}, {name:'javascript'}, {name:'react'}],
        image:'/assets/work/thumb4.png',
        live:'https://www.google.com',
        github:'https://github.com/joy-Bsc/MERN-CRUD-2',
        ScreenShot:'https://drive.google.com.'
    },
    {
        num:'05',
        category:'Frontend',
        title:'Simple Commercial Website',
        description:'This is simple commercial website. Which is build by using react, and api for fetching data and I used bootstarp for styling.',
        stack:[{name:'html5'}, {name:'css3'}, {name:'javascript'}, {name:'react'}],
        image:'/assets/work/thumb5.png',
        live:'https://www.google.com',
        github:'https://github.com/joy-Bsc/Simple-E-commerce',
        ScreenShot:'https://drive.google.com.'
    },
    {
        num:'06',
        category:'backend',
        title:'Backend Project',
        description:'This is my first backend project which handle the request and response and I used nodejs and express for server side and mongodb for database.And I used postman for testing the api. and I used jwt for authentication.and CRUD operation.',
        stack:[{name:'html5'}, {name:'css3'}, {name:'javascript'}, {name:'react'}],
        image:'/assets/images/project1.png',
        live:'https://www.google.com',
        github:'https://github.com/joy-Bsc/ToDo-Backend',
        ScreenShot:'https://drive.google.com.'
    }
]

const Work = () => {
    const [project , setProject] = useState(projects[0])
    const handleSlideChange = (swiper) => {
        const currentSlide = swiper.activeIndex;
        setProject(projects[currentSlide])
    }
    return (
        <motion.section initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}}
         className="min-h-[88vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/** Project Number */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline text-white/60">
                                {project.num}
                            </div>
                            {/** Project Category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
                            {/** Project description */}
                            <p className="text-lg text-gray-400 mt-5">{project.description}</p>
                            {/** Project Stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item,index)=>{
                                    return <li key={index} className="inline-block bg-accent text-black px-3 py-1 rounded-full text-sm mr-2">{item.name}</li>
                                          } )}
                               


                            </ul>
                            {/** border */}
                            <div className="border-t border-gray-700 mt-5"></div>
                            {/**live project buttons */}
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                <TooltipProvider delayDuration={100}> 
                                    <Tooltip>
                                        <TooltipTrigger className="w-[78px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-green-500"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                                {/**github project buttons */}
                            
                                <Link href={project.github}>
                                <TooltipProvider delayDuration={100}> 
                                    <Tooltip>
                                        <TooltipTrigger className="w-[78px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-green-500"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>GitHub Repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>

                                 {/**screenshots  buttons */}
                            
                                 <Link href={project.ScreenShot}>
                                <TooltipProvider delayDuration={100}> 
                                    <Tooltip>
                                        <TooltipTrigger className="w-[78px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <FaGoogleDrive className="text-white text-3xl group-hover:text-green-500"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Screen Shot of this project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                            
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30}
                        slidesPerView={1}
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}>
                            {projects.map((item,index)=>{
                                return <SwiperSlide key={index} className="w-full h-[460px]">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    {/** overlay */}
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    <div className="relative w-full h-full">
                                    <Image src={item.image} layout="fill" objectFit="cover" alt="project image"/>
                                    </div> 
                                    </div>
                                </SwiperSlide>
                            } )} 
                            {/*slider button */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
           
        </motion.section>
    );
};

export default Work;