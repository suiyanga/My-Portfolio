 import React from 'react'
import { BiEnvelope, BiMapPin, BiPhone } from 'react-icons/bi';
 
 const Footer = () => {
   return (
     <div className="pt-[5rem] pb-[3rem] bg-black">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px]
         pb-5 border-gray-600 border-opacity-40 ">
            <div>
            <div className="text-[24px] font-black text-white">
                <span className="text-cyan-800">A</span>
                <span className="text-cyan-800">U</span>
                <span className="text-cyan-700">G</span>
                <span className="text-cyan-600">U</span>
                <span className="text-cyan-500">S</span>
                <span className="text-cyan-600">T</span>
                <span className="text-cyan-700">I</span>
                <span className="text-cyan-800">N</span>
                <span className="text-cyan-800">E</span> 
            </div>
            <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
            Thank you for visiting! I'll be starting a blog soon where I'll be sharing insights on cybersecurity trends, hacks, writeups, AI and other relevant information security topics. 
            Stay tuned for updates! In the meantime, feel free to follow my Medium account for related content.
            </h1>
            <a href="https://medium.com/@augustkinya" className="text-cyan-500 hover:underline">Follow me on Medium</a>
          </div>
          {/* 2nd part */}
        <div className="md:mx-auto">
            <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
                Quick Links
            </h1>
            <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-purple-400">
                About
            </p>
            <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-purple-400">
                Skills
            </p>
            <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-purple-400">
                Projects
            </p>
            <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-purple-400">
                Contact
            </p>
          </div>
          {/* 3rd part */}
          <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
                Address
            </h1>
            <div className="flex items-center mt-[1rem] space-x-2">
                <BiMapPin className="w-[1rem] h-[1rem] text-purple-400 "/>
                <p className="text-[17px] font-normal text-white opacity-75"> 
                Nairobi, Kenya </p>
            </div>
            <div className="flex items-center mt-[1rem] space-x-2">
                <BiEnvelope className="w-[1rem] h-[1rem] text-purple-400 "/>
                <p className="text-[17px] font-normal text-white opacity-75"> 
                augustkinya@gmail.com </p>
            </div>
            <div className="flex items-center mt-[1rem] space-x-2">
                <BiPhone className="w-[1rem] h-[1rem] text-purple-400 "/>
                <p className="text-[17px] font-normal text-white opacity-75"> 
                +254713341586 </p>
            </div>
          </div>
        </div>
        <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
            &#169; Copyright suiyanga.dev 2024
        </div>
     </div>
   )
 }
 
 export default Footer;