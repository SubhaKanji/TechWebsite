import React from 'react'

const Cards = ({icon}) => {
  return (
    <div>
      <div  >
        <div className='bg-blue-600 lg:w-[240px] lg:h-[240px] w-[200px] h-[200px] p-8  lg:p-6  rounded-t '>
          <img src={icon} height={80} width={80} />
        </div>
        <div className='bg-blue-200 lg:w-[240px] lg:h-[240px]  w-[200px] h-[200px]  rounded-b '></div>
      </div>
        
    </div>
  )
}

export default Cards