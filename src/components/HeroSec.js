import React from 'react'
import heroimg from'../image/heroImg2.png'
import herofiler from '../image/herofilter2.png'
import logo from '../image/logo1.png'
export const HeroSec = () => {
  return (
    <div className='relative lg:w-[100vw] lg:h-[100vh] w-screen h-screen mt-2 flex flex-col'>
      <img src={heroimg} className='h-[100%]  w-[100%] absolute'/>
      <img src={herofiler} className='h-[100%]  w-[100%] absolute'/>

      <div className='w-full h-full absolute flex flex-row mt-4'>
        <div>
        <img src={logo} className='lg:h-[5rem] h-[2rem] lg:w-[10rem] w-[4rem] ml-[1rem] lg:ml-[15rem]  lg:mt-4 mt-1'/>
        </div>


       <div>
       <nav>  
            <ul className='flex flex-row  lg:space-x-10 space-x-4 lg:font-semibold  font-medium
            lg:gap-x-px mb-4 lg:ml-[30rem] ml-6 lg:mt-6 mt-2 text-white lg:text-lg text-xs'>
                <li><a href="#">Home</a></li> 
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
    </nav>
       </div>
      </div>
            
      <div className='flex flex-col lg:w-11/12 h-[100vh] lg:mt-[14rem] mt-[7rem] lg:ml-[15rem] ml-12 mr-10 sm:mr-0 lg:m-x-6
       text-white absolute'>
        <h3 className='lg:text-7xl text-4xl lg:mb-6 mb-4 font-bold'>ASR Tech Solutions</h3>
        <h1 className='lg:text-5xl text-3xl lg:mb-6 mb-4 font-bold'>"your vision, our <br/>
          digital canvas"</h1>

        <h2 className='lg:text-3xl text-xl font-normal lg:mb-6 mb-3 mt-4'>We make the impossible possible.</h2>

        <div>
            <button className='bg-sky-500 lg:text-lg text-sm lg:mt-12 mt-10 rounded lg:py-3 py-2 lg:px-12 px-6 text-white font-medium' >Explore</button>
        </div>
        </div>
      {/* <div className='absolute flex flex-row'>
      <div>
        <img src={logo} className='h-[6rem] w-[20rem] ml-[10rem] mt-4'/>
      </div>
       <nav>
        <div className='flex flex-row justify-end mt-16 mr-[8rem] mb-4' >
            <ul className="flex space-x-8 font-semibold gap-x-px mb-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </nav>
      </div>
     

        <div className='flex flex-col w-11/12 h-[100vh] mt-[6rem] ml-[15rem] m-x-6 text-white absolute'>
        <h3 className='text-3xl font-semibold'>WELCOMES YOU</h3>
        <h1 className='text-6xl mb-6 font-bold'>ElmAni Tech</h1>
        <h3 className='text-3xl font-semibold'>OUTSTANDING SOFTWARE</h3>
        <h3 className='text-3xl mb-4 font-semibold'>FOR EVERYONE</h3>

        <h2 className='text-2xl mb-6 '>We make the impossible possible.</h2>

        <div>
            <button className='bg-sky-600 border rounded py-2 px-8 text-white font-medium' >Explore</button>
        </div>
        </div> */}
       

    </div>
  )
}
