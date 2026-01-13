import React from 'react'
 import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef,useEffect } from 'react';




 const Title = ({title}) => {
    const tit = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
  
      
  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: tit.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, tit);

    return () => {
      ctx.revert();
    };
  }, []);
  
     


  return (
    <div ref={tit} className=' mt-5 pointer-events-none mix-blend-difference relative z-10 flex flex-col gap-1 text-5xl uppercase leading-[.8]   sm:px-32 md:text-[6rem]  !text-blue-900 text-center '> 
    {title.split("<br />").map((line, index) => (
        <div key={index} className='  flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3' >
{line.split("").map((word, idx) => (
  <span
              key={idx}
              className="animated-word"
               dangerouslySetInnerHTML={{ __html: word }}
            />
))}
         </div>
    ))}


    </div>
  )
}

export default Title