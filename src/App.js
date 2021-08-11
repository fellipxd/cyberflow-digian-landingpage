import React, { useState } from 'react';
import Services from "./components/Services";
import Hero from "./components/Hero";

import About from "./components/About";
import CaseStudies from "./components/Case_Studies";
import Testimonial from "./components/TestimonialCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Sidebar } from "./components/SideMenu";
import { Nav } from "./components/Nav";



function App() {


  const[isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Nav toggle={toggle}/>
    
       <Hero/>
       <Services/>
       <About/>
       <CaseStudies/>
       <Testimonial/>
       <Contact />
       <Footer/>
    </>
  );
}

export default App;
