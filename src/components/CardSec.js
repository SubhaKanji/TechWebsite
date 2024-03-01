import React from 'react'
import Cards from './Cards'
import cardimg from '../image/card.png'
import cardfilter from '../image/cardfil.png'

import card1 from "../image/card1.png"
import card2 from "../image/card2.png"
import card3 from "../image/card3.png"
import card4 from "../image/card4.png"

const CardSec = () => {
  return (
    <div className='w-[100vw] h-[100vh] relative -mt-10'>
             <img src={cardimg} className='h-[100%]  w-[100%] absolute'/>
             <img src={cardfilter} className='h-[85%]  w-[100%] absolute mt-[5rem]  object-cover '/>

             <div className='w-[80%] flex flex-row gap-20 justify-evenly ml-[10rem] mt-[8rem]  absolute' >
         
         <Cards icon={card1} />
         <Cards icon={card2} />
         <Cards icon={card3} />
         <Cards icon={card4} />
     
     </div>
    </div>
  
  )
}

export default CardSec