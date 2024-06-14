import React, { useEffect } from 'react'
import './CSS/About.css'
import mern_image from './assets/mern_image.jpg'
import Typewriter from 'typewriter-effect/dist/core';
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {
  // Function for Title
  useEffect(() => {
    function useTitle(title) {
      document.title = title;
    }
    useTitle('MySite - About');
  }, []);

  // For AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // For TypeWriter
  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Md Abdullah'],
      delay: 120,
      loop: true,
      autoStart: true,
      pauseFor: 100000,
    });
  }, []);


  return (
    <>
      <h1 data-aos="fade-down">About Us</h1>

      <div className='about'>
        <div className='about-left' data-aos="fade-right">
          <p>Hi, I'm <span id='typewriter'></span></p>
          <p>a MERN Stack Developer.</p>
          <p className='about-left-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, aspernatur. <br /> Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Quia modi reprehenderit incidunt totam ducimus! Dolore.Lorem ipsum dolor sit <br />  dolor sit amet consectetur, adipisicing elit. Quia modi reprehenderit incidunt totam ducimus! Dolore.</p>
        </div>
        <div className='about-right' data-aos="fade-left">
          <img src={mern_image} alt="" />
        </div>
      </div>

      <div>
        <h1 className='contact' >Feel free to contact us!</h1>
      </div>

      <div className='contact-div' >
        <Link to='/contact'>
          <button className='contact-btn' ><b>Contact Us</b></button>
        </Link>
      </div>
    </>
  )
}

export default About
