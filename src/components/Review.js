import React from 'react'

const Review = () => {
  return (
    <div className='w-[100vw] lg:h-[70vh] h-[90vh] flex flex-col bg-blue-400'>
      <div className='flex justify-center'>
      <p className='lg:mt-14 mt-12 lg:font-medium ml-10 mr-10 text-center font-semibold text-white text-2xl lg:text-5xl' >We Take Pride in Our Numbers</p>

      </div>
     <div className='flex flex-col lg:flex-row w-[100vw] '>
          <div className='lg:w-[32%] lg:mt-32 mt-10 flex flex-col  
          items-center justify-center'>
            <p className='lg:text-5xl text-4xl text-white '>50+</p>
            <span className='text-white lg:text-3xl text-2xl'>Text Text Text</span>
          </div>
          <div className='lg:w-[32%] lg:mt-32 mt-10 flex flex-col  
          items-center justify-center'>
          <p className='lg:text-5xl text-4xl text-white '>164+</p>
            <span className='text-white lg:text-3xl text-2xl'>Text Text Text</span>
          </div>
          <div className='lg:w-[32%] lg:mt-32 mt-10 flex flex-col  
          items-center justify-center'>
          <p className='lg:text-5xl text-4xl text-white '>43+</p>
            <span className='text-white lg:text-3xl text-2xl'>Text Text Text</span>
          </div>
     </div>
    </div>
  )
}

export default Review