import React from 'react'
import bgImage from'../image/image 2.png'
import bgFilter from '../image/Rectangle 45.png'
export const Work = () => {
  return (
    <div className=' w-[100vw]  h-[100vh] flex flex-row bg-gray-100'>
       <div className='hidden sm:block w-[50%] h-full relative'>
       <img src={bgImage} className='h-[100%]  w-[90%] absolute'/>
       <img src={bgFilter} className='h-[100%] w-[90%] absolute'/>
       <p className='text-4xl mt-[20rem] ml-[10rem]
         font-bold text-orange-500 absolute'>
            Are You Ready to Accelerate<br/>
        Your Business?</p>
       </div>

        <div className='lg:w-[50%] w-full flex flex-col items-center '>
   <p className='lg:text-4xl text-3xl lg:mt-[10rem] mt-10 ml-10  mr-10 text-center
    text-gray-500 font-semibold '>LET’S WORK <span className='text-blue-500 '>TOGETHER</span></p>

        <p className='lg:text-2xl text-lg text-gray-700 font-normal lg:mt-16
         mt-10 flex flex-col justify-center text-center lg:text-end
          lg:ml-[12rem] ml-[3rem] lg:mr-[12rem] mr-[3rem]'>
          Collaboration is a key part of the 
         of any organization executed through <br/> a
         clearlydefined visionand mission
           andbased on transparency and
           constant communication. Let's
           collaborate and grow together.</p>
        

       <button  className='bg-orange-400 border rounded py-2 text-center
         px-8 mt-16 lg:-mr-[14rem] text-blue-500 font-semibold'>Connect Us</button>

        </div>
    </div>
  )
}
