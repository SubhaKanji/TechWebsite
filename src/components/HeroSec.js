import React from 'react'
import heroimg from'../image/heroImg2.png'
import herofiler from '../image/herofilter2.png'
import logo from '../image/logo1.png'
export const HeroSec = () => {
  return (
    <div className='relative w-[100vw] h-[100vh] mt-2 flex flex-col'>
      <img src={heroimg} className='h-[100%]  w-[100%] absolute'/>
      <img src={herofiler} className='h-[100%]  w-[100%] absolute'/>

      <div className='w-full h-full absolute flex flex-row mt-4'>
        <div>
        <img src={logo} className='h-[5rem] w-[10rem] ml-[15rem] mt-4'/>
        </div>


       <div>
       <nav>  
            <ul className='flex flex-row  space-x-10 font-semibold gap-x-px mb-4 ml-[30rem] mt-6 text-white text-lg'>
                <li><a href="#">Home</a></li> 
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
    </nav>
       </div>
      </div>
            
      <div className='flex flex-col w-11/12 h-[100vh] mt-[14rem] ml-[15rem] m-x-6 text-white absolute'>
        <h3 className='text-7xl mb-6 font-bold'>ASR Tech Solutions</h3>
        <h1 className='text-5xl mb-6 font-bold'>"your vision, our <br/>
          digital canvas"</h1>

        <h2 className='text-3xl font-normal mb-6 mt-4'>We make the impossible possible.</h2>

        <div>
            <button className='bg-sky-500 text-lg mt-16 rounded py-3 px-12 text-white font-medium' >Explore</button>
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
