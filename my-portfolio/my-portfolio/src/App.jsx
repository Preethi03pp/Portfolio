import React, { useEffect } from 'react';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Certificates from './components/Certificates/Certificates';
import Internship from './components/Internship/Internship';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

import './global.css';

const App = () => {
  // Set dark theme once on mount
  useEffect(() => {
    document.body.className = 'dark';
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="hero-section"><Hero /></section>
        <section id="about-section"><About /></section>
        <section id="skills-section"><Skills /></section>
        <section id="projects-section"><Projects /></section>
        <section id="education-section"><Education /></section>
        <section id="certificates-section"><Certificates /></section>
        <section id="internship-section"><Internship /></section>
        <section id="resume-section"><Resume /></section>
        <section id="contact-section"><Contact /></section>
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default App;
