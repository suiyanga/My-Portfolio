import Image from 'next/image';
import React from 'react';

interface Props{
    image:string;
    title:string;
}

const SkillsCard = ({image, title}:Props) => {
  return (
    <div className="p-6 hover:bg-purple-400 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900 ">
        <Image 
        src={image} 
        width={80} 
        height={80} 
        alt="Skill" 
        className=" mx-auto object-cover" 
        />
        <h1 className="lg:text-[15px] sm:text-[13px] mt-[1rem] text-white font-normal">{title}</h1>
    </div>
  );
};

export default SkillsCard;