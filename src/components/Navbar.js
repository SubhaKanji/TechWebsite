import React from 'react'
import logo from '../image/logo1.png'

export const Navbar = () => {
  return (
    <div className='flex flex-row  justify-between'>
      <div>
        <img src={logo} className='h-[6rem] w-[20rem] ml-[10rem] mt-4'/>
      </div>
       <nav>
        <div className='flex flex-row justify-end mt-16 mr-[8rem] mb-4' >
            <ul className="flex space-x-8 font-semibold gap-x-px mb-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}
