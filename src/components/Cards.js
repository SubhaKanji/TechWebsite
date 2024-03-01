import React from 'react'

const Cards = ({icon}) => {
  return (
    <div>
      <div  >
        <div className='bg-blue-600 w-[240px] h-[240px] p-6  rounded-t '>
          <img src={icon} height={80} width={80} />
        </div>
        <div className='bg-blue-200 w-[240px] h-[240px] rounded-b '></div>
      </div>
        
    </div>
  )
}

export default Cards