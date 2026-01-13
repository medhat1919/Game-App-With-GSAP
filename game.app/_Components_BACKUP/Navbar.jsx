import React from 'react'
import Button from './Button';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const audioRef = useRef(null);
  const ref = useRef(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const [ScrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const toggleAudio = () => {
  setIsAudioPlaying(!isAudioPlaying);
  setIsIndicatorActive(!isIndicatorActive);
}



useEffect(() => {
  if (isAudioPlaying) {
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }
}, [isAudioPlaying]);








  return (
    <div ref={ref}
     className={`${ScrollY > 114 ? 'act' : ''} transition-all duration-300 flex justify-between items-center px-6 mt-3 w-[100%] h-20  text-white fixed z-50`}>
        <div className='flex items-center justify-center gap-3'>
<img src="./img/logo.png" alt="Logo" className='w-10 h-10' />  
<Button title='Product' className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded' />

      </div>
        <div className='hidden md:flex'>
      {navItems.map((item, index) => (
        <a key={index} href={`#${item.toLowerCase()}`} className='cursor-pointer relative ms-10 font-general text-lg uppercase text-blue-50 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer;'>{item}</a>
      ))}</div>

<button className="ml-10 flex items-center space-x-0.5 cursor-pointer"
onClick={toggleAudio} >
  <audio ref={audioRef}
   src="/audio/loop.mp3" loop  className='hidden'/> 
{[1,2,3,4].map(( bar) => (

  <div key={bar} className={`h-[9px] w-[10px] rounded-full ml-2 bg-blue-800 transition-all duration-200 ease-in-out; ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}s` }}  /> 
))}

 

</button>
      
      
       </div>
  )
}

export default Navbar