import Link from 'next/link'
import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Image from 'next/image'

interface Props {
    openNav: ()=>void
}

const Nav = ({openNav}:Props) => {
  return (
    <div className="h-[13vh] bg-[#181a1d]">
        <div className="flex items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto">
            {/* Logo */}
            <div className=" sm:text-[18px] lg:text-[22px] font-black text-white">
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
            {/*nav-links*/}
                <ul className="lg:flex hidden text-white text-xxs items-center space-x-6 xl:space-x-10">
                <li className="navlink">
                    <Link href="/"> HOME </Link>
                </li>
                <li className="navlink">
                    <Link href="#about"> ABOUT </Link>
                </li>
                <li className="navlink">
                    <Link href="#skills"> SKILLS </Link>
                </li>
                <li className="navlink">
                    <Link href="#projects"> PROJECTS </Link>
                </li>
                <li className="navlink">
                    <Link href="#contacts"> CONTACT </Link>
                </li>
              </ul>
            {/* Download and Menu */}
            <div className=" flex items-center space-x-6">
                <Link href='/images/aks.pdf' download="CV" target="_blank">
                    <button className="group relative h-10 w-24 sm:h-10 sm:w-32 md:h-12 md:w-48 overflow-hidden 
                    rounded-full bg-cyan-700 text-base shadow">
                        <span className="absolute inset-0 w-3 bg-purple-300 transition-all 
                        duration-300 ease-out group-hover:w-full block"></span>
                        <span className="relative flex items-center justify-center space-x-3 text-white">
                            <FaDownload className="text-lg sm:text-base"/>
                            <span className="inline sm:hidden"> CV </span>
                            <span className=" hidden sm:inline sm:text-xs md:text-sm"> Download CV </span>
                        </span>
                    </button>
                </Link>
                {/* Burger */}
                <HiBars3BottomRight 
                onClick={openNav}
                className="w-[2rem] text-white h-[2rem] lg:hidden" />
            </div>
        </div>
    </div>
  );
};

export default Nav;