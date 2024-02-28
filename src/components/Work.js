import React from 'react'
import bgImage from'../image/image 2.png'
import bgFilter from '../image/Rectangle 45.png'
export const Work = () => {
  return (
    <div className=' w-[100vw] h-[100vh] flex flex-row bg-gray-100'>
       <div className='w-[50%] h-full relative'>
       <img src={bgImage} className='h-[85%]  w-[90%] absolute'/>
       <img src={bgFilter} className='h-[85%] w-[90%] absolute'/>
       <p className='text-4xl mt-[20rem] ml-[10rem]
         font-bold text-orange-500 absolute'>
            Are You Ready to Accelerate<br/>
        Your Business?</p>
       </div>
        <div className='w-[50%] flex flex-col  items-center '>

       
   <p className='text-4xl mt-[10rem]
    text-gray-500 font-semibold mt'>LET’S WORK <span className='text-blue-500 '>TOGETHER</span></p>

    <div>

        
    </div>
        <p className='text-2xl text-gray-700 font-normal mt-16 ml-[12rem] mr-[10rem]'>Collaboration is a key part of the 
   of any organization executed through
    a<br/> clearlydefined visionand mission
           andbased on transparency and
          constant communication. Let's
          collaborate and grow together.</p>
        

       <button  className='bg-orange-400 border rounded py-2
         px-8 mt-16 -mr-[14rem] text-blue-500 font-semibold'>Connect Us</button>

        </div>
    </div>
  )
}
