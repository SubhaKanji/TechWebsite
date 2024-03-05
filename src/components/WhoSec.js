import React from 'react'
import picture from'../image/curb.png'
import picFilter from'../image/Rectangle 42.png'
export const WhoSec = () => {
  return (
    <div className='flex flex-row w-[100vw] h-full lg:h-[100vh] lg:-mt-7 mt-20  ' >
        <div className='flex flex-col justify-center  w-[80%] lg:w-[50%] '>
          <div className='w-full lg:w-[48%] ml-9  lg:ml-[16rem] flex flex-col justify-center  sm:items-start items-center'>
          <p className='sm:hidden font-bold text-3xl  mb-10 text-orange-500'> WHO WE ARE ?</p> 
          <p className='text-xl font-normal text-center sm:text-start'>Leading offshore software development company 
            with global client base Binarybossess was conceived 
            with a vision to offer tecnical excellence to global clients.
            We are a mobile app and website development company for intuitive,
             innovative apps for startups, enterprise and individuals 
             with a penchant for technology.</p>
           <div><button  className='bg-orange-500 border rounded py-2 
           px-8 mt-20 mb-10 text-blue-500 '>Explore</button></div>
          </div>
          
        </div>
        <div className='hidden lg:flex flex-col w-[50%] justify-center relative'>
        <img src={picture} className='h-full  w-full absolute rounded-l-full '/>
       <img src={picFilter} className='h-full  w-full absolute rounded-l-full'/>
           <p className='text-6xl ml-[20rem] text-orange-500 absolute'> WHO WE ARE ?</p>
        </div>
    </div>
  )
}
