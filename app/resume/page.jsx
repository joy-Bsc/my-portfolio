"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaDatabase, FaFire,FaC,FaCplusplus} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { DiJava, DiC, DiCpp, DiPython } from 'react-icons/di';

//about data

const about = {
    icon: '/assets/resume/cap.svg',
    title: "About me",
    description: "I am a full stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my skills.",
   
    info: [
        {
            fieldName: "Name",
            value: "Joy Dhar"
        },
        {
            fieldName: "Phone",
            value: "+8801792-233327"
        },
        {
            fieldName: "Email",
            value: "dharjoy75@gmail.com"
        },
        {
            fieldName: "Languages",
            value: "English, Bengali"
        },
        {
            fieldName: "Address",
            value: "Naogaon, Rajshahi, Bangladesh"
        },
    ]
}
    
 

const education = {
    icon: '/assets/resume/cap.svg',
    title: "Education",
    description: "I have a Bachelor's degree in Information and Communication Technology from the Mawlana Bhasani Science and Technology University . I graduated in 2024 with a GPA of 3.3. I have also completed several online courses in web development and programming.",
   items: [
        {
            institution: "Mawlana Bhasani Science and Technology University",
            degree: "B.Sc(Eng)",
            major: "Information and Communication Technology",
            year: "2024",
            session: "2019-2024",
            gpa: "3.3"
        },
        {
            institution: "Naogaon Govt. College",
            degree: "HSC",
            major: "Science",
            year: "2017",
            session: "2015-2016",
            gpa: "5.00"
        },
        {
            institution: "Naogaon K.D Govt. High School",
            degree: "SSC",
            major: "Science",
            year: "2015",
            session: "2013-2014",
            gpa: "5.00"
        }
    ]
}

const skills = {
    title:"My Skills",
    description: "I have experience with a variety of programming languages and technologies. I am always looking to learn new things and improve my skills. Here are some of the skills I have:",
    skillList: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Express.js", icon: <FaNodeJs /> }, // Assuming Express.js is represented by FaNodeJs
        { name: "MongoDB", icon: <FaDatabase /> },
        { name: "Firebase", icon: <IoLogoFirebase /> } // Corrected icon for Firebase
    ]
}

const programmingLanguages = {
    title: "Programming Languages",
    description: "I have experience with a variety of programming languages. Here are some of the languages I have experience with:",
    languageList: [
        {
            name: "C",
           
        },
        {
            name: "C++",
           
        },
        {
            name: "Java",
            icon: <DiJava /> // Corrected icon for Java
        },
        {
            name: "Python",
            icon: <DiPython /> // Corrected icon for Python
        },
    ]
}

const OnlineJudgeHandle = {
    title: "Online Judge Handle",
    description: "I have accounts on several online judge platforms. Here are some of the platforms I am on:",
    handleList: [
        {
            name: "Codeforces",
            handle: "Joy Dhar",
            url: "https://codeforces.com/joy_dhar"
        },
        {
            name: "Leetcode",
            handle: "Joy Dhar",
            url: "https://leetcode.com/u/joy-ict/"
        },
        {
            name: "UVA",
            handle: "Joy Dhar",
            url: "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=15"
    },
    {
        name: "Beecrowd",
        handle: "Joy Dhar",
        url: "https://judge.beecrowd.com/en/profile/332163"
    }

    ]
}

import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs';
import {Tooltip,TooltipContent,TooltipTrigger} from '@radix-ui/react-tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';

import {motion} from 'framer-motion';
import { ScrollArea } from '@/components/ui/ScrollArea';


const Resume = () => {

    return (
        <motion.div initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                duration:0.4,
                delay:2.4,
                ease:'easeIn'
            }
        }}
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <Tabs defaultValue='skills'
                className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="programmingLanguages">Programming Languages</TabsTrigger>
                        <TabsTrigger value="OnlineJudgeHandle">Online Judge Handle</TabsTrigger>
                    </TabsList>
                    <div className='min-h[70vh] w-full'>
                        {/*about*/}
                        <TabsContent value="about" className='w-full'>
                           <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'>{about.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                            <ScrollArea className='max-w-[600px] mx-auto xl:mx-0'>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {about.info.map((item,index)=>(
                                        <li key={index} className='flex gap-4'>
                                            <span className='text-accent'>{item.fieldName}:</span>
                                            <span className='text-white'>{item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                           </div>
                        </TabsContent>

                         {/*education*/}
                         <TabsContent value="education" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                             <h3 className='text-4xl font-bold'>{education.title}</h3>
                             <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                             <ScrollArea className='max-w-[600px] mx-auto xl:mx-0'>
                                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item,index)=>(
                                         <li key={index} className='flex flex-col gap-4'>
                                              <h4 className='text-xl font-bold'>{item.institution}</h4>
                                              <p className='text-white/60'>{item.degree} in {item.major}</p>
                                              <p className='text-white/60'>Year: {item.year}</p>
                                              <p className='text-white/60'>Session: {item.session}</p>
                                              <p className='text-white/60'>GPA: {item.gpa}</p>
                                         </li>
                                        ))}
                                  </ul>
                             </ScrollArea>
                            </div>
                         </TabsContent>

                          {/*skill*/}
                          


<TabsContent value="skills" className='w-full'>
  <TooltipProvider>
    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
      <h3 className='text-4xl font-bold'>{skills.title}</h3>
      <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
      <ScrollArea className='max-w-[600px] mx-auto xl:mx-0'>
        <ul className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
          {skills.skillList.map((item, index) => (
            <li key={index} className='flex flex-col items-center gap-2'>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='text-6xl p-4 bg-slate-900 rounded-lg'>
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent sideOffset={5} side="top" align="center" className='p-2 bg-slate-900 rounded-lg text-white'>
                  {item.name}
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  </TooltipProvider>
</TabsContent>

                         {/*programming language*/}
                         <TabsContent value="programmingLanguages" className='w-full'>
                         <TooltipProvider>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                             <h3 className='text-4xl font-bold'>{programmingLanguages.title}</h3>
                             <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{programmingLanguages.description}</p>
                             <ScrollArea className='max-w-[600px] mx-auto xl:mx-0'>
                                  <ul className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                                        {programmingLanguages.languageList.map((item,index)=>(
                                         <li key={index} className='flex flex-col items-center gap-2'>
                                             <Tooltip>
                                                 <TooltipTrigger asChild>
                                                     <div className='text-6xl p-4 bg-slate-900 rounded-lg'>
                                                         {item.icon}
                                                     </div>
                                                 </TooltipTrigger>
                                                 <TooltipContent sideOffset={5} side="top" align="center" className='p-2 bg-slate-900 rounded-lg text-white'>
                                                     {item.name}
                                                 </TooltipContent>
                                             </Tooltip>
                                         </li>
                                        ))}
                                  </ul>
                             </ScrollArea>
                            </div>
                            </TooltipProvider>
                         </TabsContent>

                          {/*online judge*/}
                        <TabsContent value="OnlineJudgeHandle" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                             <h3 className='text-4xl font-bold'>{OnlineJudgeHandle.title}</h3>
                             <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{OnlineJudgeHandle.description}</p>
                             <ScrollArea className='max-w-[600px] mx-auto xl:mx-0'>
                                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {OnlineJudgeHandle.handleList.map((item,index)=>(
                                         <li key={index} className='flex gap-4'>
                                             <span className='font-bold text-accent'>{item.name}:</span>
                                             <a href={item.url} target="_blank" rel="noreferrer" className='text-white hover:text-accent'>{item.handle}</a>
                                         </li>
                                        ))}
                                  </ul>
                             </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>

                </Tabs>

            </div>
            </motion.div>

    );
};

export default Resume;