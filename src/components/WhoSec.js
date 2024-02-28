import React from 'react'
import picture from'../image/curb.png'
import picFilter from'../image/curbfilter.png'
export const WhoSec = () => {
  return (
    <div className='flex flex-row w-[100vw] h-[100vh] ' >
        <div className='flex flex-col justify-center w-[50%] '>
          <div className='w-[45%] ml-[16rem]'>
          <p className='text-xl font-normal'>Leading offshore software development company 
            with global client base Binarybossess was conceived 
            with a vision to offer tecnical excellence to global clients.
            We are a mobile app and website development company for intuitive,
             innovative apps for startups, enterprise and individuals 
             with a penchant for technology.</p>
           <div><button  className='bg-orange-500 border rounded py-2 
           px-8 mt-20 text-white font-medium'>Explore</button></div>
          </div>
          
        </div>
        <div className='flex flex-col w-[50%] justify-center relative'>
        <img src={picture} className='h-full  w-full absolute '/>
       <img src={picFilter} className='h-full  w-full absolute'/>
           <p className='text-6xl ml-[20rem] text-orange-500 absolute'> WHO WE ARE ?</p>
        </div>
    </div>
  )
}
