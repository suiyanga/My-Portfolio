import React from 'react'
import Heading from '../../Helper/Heading';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        <Heading headingPrimary="Explore My Skills" headingSub="My Skills" />
        <div className="grid w-[80%] mt-[5rem] mx-auto grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4 gap-[1rem] items-center">
            {/* skills cards */}
            <div 
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center" 
            >
                <SkillsCard image="/images/python-svg.svg" title="Python" />
            </div>
            <div 
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            >
                <SkillsCard image="/images/react-svg.svg" title="React" />
            </div>
            <div  
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            >
                <SkillsCard image="/images/linux-svg.svg" title="Linux" />
            </div>
            <div  
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            >
                <SkillsCard image="/images/laravel.svg" title="Laravel" />
            </div>
            <div  
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
            >
                <SkillsCard image="/images/typescript.svg" title="Typescript" />
            </div>
            <div  
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
            >
                <SkillsCard image="/images/html-5.svg" title="HTML" />
            </div>
            <div  
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="600"
            >
                <SkillsCard image="/images/tailwind.svg" title="Tailwind" />
            </div>
            <div 
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="700"
            >
                <SkillsCard image="/images/php.svg" title="PHP" />
            </div>
            <div  
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="800"
            >
                <SkillsCard image="/images/next-js.svg" title="Next JS" />
            </div>
            <div  
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="900"
            >
                <SkillsCard image="/images/django.svg" title="Django" />
            </div>
            <div  
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="1000"
            >
                <SkillsCard image="/images/mysql.svg" title="mySQL" />
            </div>
            <div  
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="1200"
            >
                <SkillsCard image="/images/firebase.svg" title="Firebase" />
            </div>
        </div>
    </div>
  );
};

export default Skills;