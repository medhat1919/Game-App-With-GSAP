import React from 'react'



const Card = ({src,title,description}) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full bg-black  '>
<video src={src} autoPlay loop muted className='h-full w-full object-cover'/> 
        <div className='absolute top-0 left-0 h-full w-[60%]'>
        <h2 className='text-2xl font-extrabold m-5 text-blue-600'>{title}</h2>
        <p className='text-white m-5'>{description}</p>
                </div>

        </div>
    )
}

const Features = () => {
  return (
    <div className='bg-black pb-53'> 
<section className='mx-auto px-4 md-px-10 z-50 opacity-100'>
        <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Into the Metagame Layer
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50  ">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>

      <div className= "z-50 border-amber-50 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]" >    
       <Card  src="videos/feature-1.mp4"  title={"zigbmba" }
             description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
       />
       </div>

           
<div className='flex h-[135vh] w-full  gap-5 '>
    <div className='h-[120vh] w-[50%] relative '>
    <div className=' relative mb-7 h-[105vh]  w-full overflow-hidden  rounded-md '>
<Card  src="videos/feature-2.mp4"  title={"Radiant" }
       description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
       />
    </div>
</div>









<div className='h-[100vh] w-[50%] relative flex-cols '>
    <div className=' relative mb-7 h-[50vh]  w-full overflow-hidden  rounded-md '>
<Card  src="videos/feature-3.mp4"  title={"Nbebxus" }
       description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
       />
    </div>
    <div className=' relative mb-7 h-[50vh]  w-full overflow-hidden  rounded-md '>
<Card  src="videos/feature-4.mp4"  title={"Azbubi" }
       description="A cross-world AI Agent - elevating your gameplay to be more fun and productive.."
       />
    </div>
    </div>

 

    </div>

     <div className='relative flex mt-[-200px] gap-3'>
<div className='  mb-7 h-[40vh] bg-blue-900  w-[50%] overflow-hidden  rounded-md '>
  
<h1 className='text-5xl   leading-0.8 font-extrabold m-5 mb-12 text-black'>New <br />Coming <br />Soon</h1>
</div>


<div className=' relative mb-7 h-[40vh]  w-[50%] overflow-hidden  rounded-md '>
<Card  src="videos/feature-5.mp4"  title={"Nbebxus" }
       description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
       />
    </div>



 </div>

 






 


</section>
    </div>
  )
}

export default Features