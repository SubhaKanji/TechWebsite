import React from 'react'
import Cards from './Cards'
import cardimg from '../image/card.png'
import cardfilter from '../image/cardfil.png'
const CardSec = () => {
  return (
    <div className='w-[100vw] h-[100vh] relative'>
             <img src={cardimg} className='h-[100%]  w-[100%] absolute'/>
             <img src={cardfilter} className='h-[85%]  w-[100%] absolute mt-[5.5rem]  object-cover '/>

             <div className='w-[80%] flex flex-row gap-24 justify-evenly ml-[10rem] mt-[11rem]  absolute' >
         
         <Cards/>
         <Cards/>
         <Cards/>
         <Cards/>
     
     </div>
    </div>
  
  )
}

export default CardSec