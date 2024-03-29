import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { GiVibratingSmartphone } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";
export const Footer = () => {
  return (
    <div className='w-[100vw]  lg:h-[90vh] h-[100vh]'>
      <div className='flex flex-col justify-center items-center mt-10'>
      <h1 className='lg:text-7xl text-5xl font-semibold font-serif'>Contact Us</h1>
      <p className=' mt-6 ml-[5rem] mr-[5rem] lg:text-lg text-base  text-gray-400'>
        Sample text. Click to select the text box. Click again or double</p>

      <p  className='lg:text-lg text-base lg:mt-0 mt-6  text-gray-400'>click to start editing the text.</p>
      
      <div>

      </div>
      </div>

  
      <div className='flex lg:flex-row flex-col  justify-evenly mt-16
                      items-center space-y-6 sm:space-y-6'>
        <div className='flex flex-col justify-center items-center lg:space-y-5 space-y-2'>
        <SlLocationPin className='lg:h-10 lg:w-10 h-6 w-6 text-gray-600' />
          <p className='lg:text-3xl text-2xl font-bold text-gray-500'>ADDRESS</p>
          <p className='lg:text-xl text-lg text-gray-600'>27 13 Lowe Haven</p>
        </div>
        <div className='flex flex-col justify-center items-center lg:space-y-5 space-y-2'>
        <GiVibratingSmartphone className='lg:h-10 lg:w-10 h-6 w-6 text-gray-600'/>
          <p className='lg:text-3xl text-2xl font-bold text-gray-500'>PHONE</p>
          <p className='lg:text-xl text-lg text-gray-600'>111 343 43 43</p>
        </div>
        <div className='flex flex-col justify-center items-center lg:space-y-5 space-y-2'>
        <MdOutlineMail  className='lg:h-10 lg:w-10 h-6 w-6 text-gray-600'/>
          <p className='lg:text-3xl text-2xl font-bold text-gray-500'>EMAIL</p>
          <p className='lg:text-xl  text-lg text-gray-600'>business@info.com
          </p>
        </div>
      </div>

      <div className='w-full lg:h-[35%] h-[70%] bg-blue-300 mt-[7rem] '>
        <div className='w-[80%] h-[100%] mx-auto '>
        <p className='text-white text-lg font-bold pt-6 lg:text-start text-center  '>
        Copyright © 2023 Crypto Expo. All Rights Reserved</p>

      <p className=' text-white text-sm font-semibold pt-10 text-center '>
    Disclaimer: Cryptocurrencies are complex instruments 
    and come with a high risk of losing money rapidly due 
    to its volatility. You should consider whether you 
    understand how cryptocurrency work and whether you can 
    afford to take the high risk of losing your money.
    This event is organised to provide educational
    content and networking opportunities for the virtual
    asset Industry. This event and our company does not 
    involve in any recommendation or investment or
    selling/buying of any financial products.
    Visitors under the age of 18 will not be admitted.</p>
      </div>
        </div>
     
       {/* <div className='bg-blue-300 mb-1  absolute inset-x-0 bottom-0  h-[30%] '>

        
        <div className='flex flex-row'>
             <div> <p className='text-white text-lg font-bold mt-6 ml-10'>Copyright © 2023 Crypto Expo. All Rights Reserved</p></div>
      </div>
         
          
           
            <div className=' mt-6 mr-[10rem] ml-10 '>
            <p className='text-white text-base font-semibold '>
    Disclaimer: Cryptocurrencies are complex instruments 
    and come with a high risk of losing money rapidly due 
    to its volatility. You should consider whether you 
    understand how cryptocurrency work and whether you can 
    afford to take the high risk of losing your money.
    This event is organised to provide educational
    content and networking opportunities for the virtual
    asset Industry. This event and our company does not 
    involve in any recommendation or investment or
    selling/buying of any financial products.
    Visitors under the age of 18 will not be admitted.</p>
            </div>
             
       </div> */}
    </div>
  )
}
