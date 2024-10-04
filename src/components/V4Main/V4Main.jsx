'use client';

import React, { useEffect, useRef } from 'react';
import V4Header from '../V4Header/V4Header';
import V4Bio from '../V4Bio/V4Bio';
import V4Cursor from '../V4Cursor/V4Cursor';
import V4Contact from '../V4Contact/V4Contact';
import V4Skills from '../V4Skills/V4Skills';
import V4Experience from '../V4Experience/V4Experience';
import V4Education from '../V4Education/V4Education';
import V4Footer from '../V4Footer/V4Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const V4Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <V4Cursor />
      <div className='w-full min-h-screen mx-auto'>
        <V4Header
          scrollToSkills={() => scrollToSection(skillsRef)}
          scrollToExperience={() => scrollToSection(experienceRef)}
          scrollToEducation={() => scrollToSection(educationRef)}
          scrollToContact={() => scrollToSection(contactRef)}
        />
        <V4Bio
          scrollAction={(e) => {
            e.preventDefault();
            scrollToSection(contactRef);
          }}
        />
        <V4Skills ref={skillsRef} />
        <V4Experience ref={experienceRef} />
        <V4Education ref={educationRef} />
        <V4Contact ref={contactRef} />
        <V4Footer />
      </div>
    </>
  );
};

export default V4Main;
