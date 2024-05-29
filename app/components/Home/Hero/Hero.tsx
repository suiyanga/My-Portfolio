"use client";
import Image from 'next/image'
import React from 'react'
import TextEffect from './TextEffect'

const Hero = () => {
  return (
    <div className="h-[87vh] flex justify-center flex-col">
       <div className="w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-5 items-center gap-[5rem]">
        <div className="col-span-2 hidden sm:block">
            {/* image */}
            <div 
            data-aos="zoom-in" 
            className="mx-auto w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]
            xl:w-[400px] xl:h-[400px] opacity-90">
                <Image 
                src="/images/undraw_program.svg" 
                alt="Avatar" 
                width={400} 
                height={400}
                className="w-[100%] h-[100%]"
                />
            </div>
        </div>
        <div className="col-span-3">
            <h1 
            data-aos="fade-left" 
            data-aos-delay="400" 
            className="text-[10px] xl:text-[20px] text-purple-300 font-bold"> 
            Hello, I&apos;m
            </h1>
            <h1 
            data-aos="fade-right" 
            data-aos-delay="600" 
            className="text-[20px] sm:text-[25px] lg:text-[35px] xl:text-[50px] font-extrabold text-white">
            <span className="text-cyan-600">Augustine </span> Suiyanga
            </h1>
            <TextEffect /> 
            <p 
            data-aos="fade-right" 
            data-aos-delay="800" 
            className="text-[13px] xl:text[15px] text-white text-opacity-60 mt-[1.5rem]">
            A recent graduate specializing in Information Security and Forensics and with experience in Software Development.
            Proficient with Information Security technologies including Pentesting, Vulnerability assessment, Endpoint security, 
            Network and application security and Digital forensics. In addition I have experience in building software applications 
            using HTML, Tailwind CSS, React, TypeScript, Next JS, Python & Laravel.  
            </p>
        </div>
        </div> 
    </div>
  )
}

export default Hero