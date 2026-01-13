import React, { useState, useRef } from 'react';
import Button from './Button';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(1);
  const totalVideos = 4; // Total number of videos available
  const [IsVideoClicked, setIsVideoClicked] = useState(false);
  const [LoadedVideos, setLoadedVideos] = useState(0);

  const videoSrc = (index) => `videos/hero-${index}.mp4`; // Base path for videos
  
  // Create separate refs for each video element
  const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const handleVideoClick = () => {
    setIsVideoClicked(true);
    // This logic cycles through the videos from 1 to 3 and then back to 1.
    setCurrentVideo((prevVideo) => (prevVideo % totalVideos) + 1);
  };

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <div id="video-frame" className="group relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div className='absolute top-[100px] left-[20px] text-center z-10'>
          <h1 className='text-9xl font-extrabold text-white'>REDEFI<s className='text-blue-600 hover:text-blue-800 hover:cursor-pointer hover:underline'>N</s>E</h1>
          <p className='text-2xl font-bold text-white'>Enter the Metagame Layer Unleash the Play Economy </p>
          <Button title="Play Now" bgColor="bg-blue-600" textColor="text-white" />
        </div>

        <div className="group absolute inset-0 flex justify-center items-center">
          {/* This is the small video that appears on hover */}
          <div className='absolute z-20 flex justify-center items-center translate-y-[20px] opacity-0 scale-50 hover:opacity-100 hover:scale-150 transition-all duration-500 ease-in h-[300px] w-[400px] rounded-lg' onClick={handleVideoClick}>
            <video
              ref={currentVideoRef} // Use specific ref
              id='current-video'
              src={videoSrc(currentVideo)}
              autoPlay
              loop
              muted
              onLoadedData={handleVideoLoad}
              className='z-20 object-cover h-full w-full rounded-lg cursor-pointer'
            />
          </div>
        </div>

        <div>
          <video
            ref={nextVideoRef} // Use specific ref
            id='next-video'
            src={videoSrc(currentVideo)}
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoad}
            className='z-20 invisible object-center object-cover h-full w-full rounded-lg cursor-pointer'
          />
          
          {/* Corrected logic for the background video src */}
          <video
            ref={backgroundVideoRef} // Use specific ref
            src={videoSrc((currentVideo % totalVideos) + 1)}
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoad}
            className=' object-center scale-150 absolute left-0 top-0 size-full object-cover h-full w-full rounded-lg z-0'
          />
        </div>

        <div className='absolute bottom-[30px] right-[20px] text-center z-20'>
          <h1 className='text-8xl font-extrabold text-white'>GAMI<s className='text-blue-600 hover:text-blue-800 hover:cursor-pointer hover:underline'>N</s>G</h1>
        </div>
       
      </div>
 <div className='absolute bottom-[30px] right-[5px] text-center '>
          <h1 className='text-8xl font-extrabold !text-blue-900'>GAMING</h1>
        </div>

    </div>
  );
};

export default Hero;
