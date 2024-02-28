import React from 'react'
import heroimg from'../image/hero.png'
import herofiler from '../image/Rectangle 30.png'
export const HeroSec = () => {
  return (
    <div className='relative w-[100vw] h-[100vh] mt-2'>
      <img src={heroimg} className='h-[100%]  w-[100%] absolute'/>
      <img src={herofiler} className='h-[100%]  w-[100%] absolute'/>
        <div className='flex flex-col w-11/12 h-[100vh] mt-[6rem] ml-[15rem] m-x-6 text-white absolute'>
        <h3 className='text-3xl font-semibold'>WELCOMES YOU</h3>
        <h1 className='text-6xl mb-6 font-bold'>ElmAni Tech</h1>
        <h3 className='text-3xl font-semibold'>OUTSTANDING SOFTWARE</h3>
        <h3 className='text-3xl mb-4 font-semibold'>FOR EVERYONE</h3>

        <h2 className='text-2xl mb-6 '>We make the impossible possible.</h2>

        <div>
            <button className='bg-sky-600 border rounded py-2 px-8 text-white font-medium' >Explore</button>
        </div>
        </div>
       

    </div>
  )
}
