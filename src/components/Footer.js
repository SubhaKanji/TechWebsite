import React from 'react'


export const Footer = () => {
  return (
    <div className='w-[100vw] h-[80vh] relative '>
       <div className='bg-blue-300 mb-1  absolute inset-x-0 bottom-0  h-[40%] '>

        
        <div className='flex flex-row'>
             <div> <p className='text-white text-lg font-bold mt-6 ml-10'>Copyright © 2023 Crypto Expo. All Rights Reserved</p></div>
          <div> <p className='text-white text-lg font-bold mt-6 ml-[55rem] '>Terms and Conditions
            <br/> Privacy Policy</p>
</div></div>
         
          
           
            <div className=' mt-6 mr-[10rem] ml-10'>
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
             
       </div>
    </div>
  )
}
