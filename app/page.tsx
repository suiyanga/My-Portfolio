import React from 'react'
import Home from './components/Home/Home';
import AboutMe from './components/Home/AboutMe/AboutMe';
import Skills from './components/Home/Skills/Skills';
import Projects from './components/Home/Projects/Projects';
import Contacts from './components/Home/Contacts/Contacts';

const HomePage = () => {
  return (
    <div>
       <Home />  
       <section id="about">
       <AboutMe />  
       </section>
       <section id="skills">
       <Skills />
       </section>
       <section id="projects">
       <Projects />
       </section>
       <section id="contacts">
       <Contacts />
       </section>
     </div>
  );
};

export default HomePage 