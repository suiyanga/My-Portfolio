import React from 'react';
import Heading from '../../Helper/Heading';
import AboutInfoBox from './AboutInfoBox';
import AboutImage from '@/public/images/website.svg'
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="mt-[5rem] mb-[3rem]">
        <Heading 
        headingPrimary="I Can Build Your Dream Website" 
        headingSub=" About Me" 
        />
        <div className="w-[80%] mt-[5rem] md:mt-[3rem] mx-auto grid grid-cols-1 
        xl:grid-cols-2 items-center gap-[4rem] ">
          <div>
            <AboutInfoBox 
            text1="First Name : Augustine" 
            text2="Last Name : Suiyanga" 
            />
            <AboutInfoBox 
            text1="Address : Nairobi" 
            text2="Phone : +245713341586" 
            />
            <AboutInfoBox 
            text1="Age : 22" 
            text2="Email : augustkinya@gmail.com" 
            />
            <AboutInfoBox 
            text1="Freelance : Available" 
            text2="Language : English, Swahili" 
            />
            <AboutInfoBox 
            text1="Country : Kenya" 
            text2="Role : Developer" 
            />
          </div >
          {/* image */}
          <div className="text-right ">
          <Image 
          data-aos="zoom-in" 
          data-aos-anchor-placement="top-center" 
          src={AboutImage} 
          alt="About" 
          className=" lg:w-[35rem] lg:h-[35rem] sm:w-[20rem] sm:h-[20rem] mx-auto opacity-90" 
          />
          </div>
        </div>
    </div>
  )
}

export default AboutMe;