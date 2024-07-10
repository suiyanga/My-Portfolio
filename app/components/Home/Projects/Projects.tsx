import React from 'react'
import Heading from '../../Helper/Heading';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        <Heading 
          headingPrimary="Explore My Projects"
          headingSub="Projects" 
        />
        <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-[2rem]"> 
          <div 
            data-aos="fade-up" 
            data-aos-anchor-placement="top-center"
          >
            <Link href="/">
              <div className="block transform cursor-pointer hover:-translate-y-6 transition-all duration-200">
                <div className="relative w-[100%] h-[200px] md:h-[300px]">
                  <Image 
                    src="/images/portfolio.jpg" 
                    alt="Portfolio"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="opacity-50"
                  />
                </div>
                <p className="text-center mt-2 text-white text-[1rem]">Online Portfolio</p>
              </div>
            </Link>
          </div>
          <div 
            data-aos="fade-up" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <Link href="https://job-portal-seven-phi.vercel.app/">
              <div className="block transform cursor-pointer hover:-translate-y-6 transition-all duration-200">
                <div className="relative w-[100%] h-[200px] md:h-[300px]">
                  <Image 
                    src="/images/job.jpg" 
                    alt="Investment"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="opacity-50"
                  />
                </div>
                <p className="text-center mt-2 text-white text-[1rem] "> Responsive Job Portal</p>
              </div>
            </Link>
          </div>
          <div 
            data-aos="fade-up" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
          >
            <Link href="https://chatter-box-alpha.vercel.app/">
              <div className="block transform cursor-pointer hover:-translate-y-6 transition-all duration-200">
                <div className="relative w-[100%] h-[200px] md:h-[300px]">
                  <Image 
                    src="/images/videocall.jpg" 
                    alt="Website"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="opacity-50"
                  />
                </div>
                <p className="text-center mt-2 text-white text-[1rem]">ChatterBox Videocall App</p>
              </div>
            </Link>
          </div>
          <div 
            data-aos="fade-up" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <Link href="/rafiki">
              <div className="block transform cursor-pointer hover:-translate-y-6 transition-all duration-200">
                <div className="relative w-[100%] h-[200px] md:h-[300px]">
                  <Image 
                    src="/images/circle.jpg" 
                    alt="Rafiki"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="opacity-50"
                  />
                </div>
                <p className="text-center mt-2 text-white text-[1rem]">Upcoming Project</p>
              </div>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Projects;
