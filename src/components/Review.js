import React from 'react'

const Review = () => {
  return (
    <div className='w-[100vw] h-[70vh] flex flex-col bg-blue-400'>
      <div className='flex justify-center'>
      <p className='mt-14 font-medium text-white text-5xl' >We Take Pride in Our Numbers</p>

      </div>
     <div className='flex flex-row w-[100vw] '>
          <div className='w-[32%] mt-32 flex flex-col  
          items-center justify-center'>
            <p className='text-5xl text-white '>50+</p>
            <span className='text-white text-3xl'>Text Text Text</span>
          </div>
          <div className='w-[32%] mt-32  flex flex-col  
          items-center justify-center'>
          <p className='text-5xl text-white '>164+</p>
            <span className='text-white text-3xl'>Text Text Text</span>
          </div>
          <div className='w-[32%] mt-32 flex flex-col  
          items-center justify-center'>
          <p className='text-5xl text-white '>43+</p>
            <span className='text-white text-3xl'>Text Text Text</span>
          </div>
     </div>
    </div>
  )
}

export default Review