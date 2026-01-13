import React from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

import Title from './Title';
 
gsap.registerPlugin(ScrollTrigger);

 const About = () => {

  const clibAnimation = useRef(null);
  const clib = useRef(null);



 useGSAP(() => {
 const clibAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "center center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true
        },
    })
    clibAnimation.to(".mask-clip-path", {
        borderRadius: '0',
        width: "100%",
        height: "100%",
  
     });
})

 


  

  return (
    <div  className='relative h-[100vh] w-screen overflow-x-hidden mt-[300px] pb-[1500px]'>
        <div
        ref={clib}
        className='mb-8 mt-[-50px] flex flex-col  items-center'>
            <h1 className='text-2xl font-normal uppercase '>Welcome to Zentry</h1>
             <Title
          title="Discover the world's <br /> largest shared adventure"
         />
        </div>
        
       
      

<div className='h-[100vh] flex justify-center z-40  ' id='about'>
    <div
     className='mask-clip-path mb-10  w-[400px] h-[300px] rounded-2xl  ' >
        <img src='img/about.webp' alt="about image"  className='w-full h-full object-cover rounded-2xl '/>
    </div>
</div>
 <div className="absolute bottom-0   text-center w-full mt-5 ">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>

    </div>
  )
}

export default About