import Link from 'next/link';
import React from 'react';
import { ImCross } from 'react-icons/im';

interface Props{
    showNav: boolean;
    closeNav: ()=>void;
}

const MobileNav = ({closeNav, showNav}:Props) => {

    const navOpenStyle = showNav ? "translate-x-0":"translate-x-[-100%]";


  return (
    <div>
        {/* overlay */}
        <div className={'fixed ${navOpenStyle} top-0 transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-full h-[100vh]'}
        ></div>
        {/* nav-links */}
        <ul className={'text-white ${navOpenStyle} fixed flex top-0 items-center justify-center flex-col h-[100vh] transform transition-all duration-300 delay-300 w-[60%] sm:w-[40%] bg-purple-300 space-y-10 z-[10000] rounded-t-[20px] rounded-b-[20px]'}>
        <li className="navlink text-[15px] sm:text-[20px]">
            <Link href="/"> Home </Link>
        </li>
        <li className="navlink text-[15px] sm:text-[20px]">
            <Link href="#about"> About </Link>
        </li>
        <li className="navlink text-[15px] sm:text-[20px]">
            <Link href="#skills"> Skills </Link>
        </li>
        <li className="navlink text-[15px] sm:text-[20px]">
            <Link href="#projects"> Projects </Link>
        </li>
        <li className="navlink text-[15px] sm:text-[20px]">
            <Link href="#contacts"> Contact </Link>
        </li>
        <ImCross 
        onClick={closeNav}
        className="absolute top-[-1.4rem] right-[1.4rem] w-[1.4rem] h-[1.4rem] text-white" />
       </ul> 
    </div>
  );
};

export default MobileNav;