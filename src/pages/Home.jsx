import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Features from '../components/Features';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
    <Banner/>
    <About/>
    <Services/>
    <Projects/>
    <Features/>
    <Contact/>
    </>
  )
}

export default Home;