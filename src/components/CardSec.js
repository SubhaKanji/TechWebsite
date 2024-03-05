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
    <div className='w-[100vw] h-full lg:h-[100vh] relative -mt-10'>
      <img src={cardimg} className='hidden sm:block h-[100%]  w-[100%] absolute' />
      <img src={cardfilter} className='hidden sm:block lg:h-[85%] h-[100%]  w-[100%] 
             absolute lg:mt-[5rem] mt-[3rem]  object-cover '/>
 
      <div className='w-[80%] flex lg:flex-row flex-col  lg:gap-20 gap-10 lg:justify-evenly lg:ml-[10rem] ml-[6rem]
           mt-20   lg:mt-[8rem]  lg:absolute' >

        <Cards icon={card1} />
        <Cards icon={card2} />
        <Cards icon={card3} />
        <Cards icon={card4} />

      </div>
    </div>

  )
}

export default CardSec