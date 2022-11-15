import React from 'react'
import { HiMenu } from 'react-icons/hi'
import Logo from '../assets/logo1.png'

const Navbar = () => {
  return (
    <div className='relative flex justify-between items-center w-full bg-[#FFFAFB] h-[80px]'>
      <div className='flex items-center '>
      < a href='/' className='' ><HiMenu /></a>
        <img src={Logo} alt='Afikas Kitchen' style={{width:'200px'}} />
      </div>
      <div className=' hidden md:flex justify-end '>
          <button className='text-black border-2 border-[#4f2528] hover:bg-gray-300 px-4 py-3 my-3 mx-2 rounded-full'>Log in</button>
          <button className='text-white border-2 bg-black hover:bg-[#660109] hover:border-[#660109] px-4 py-3 my-3 rounded-full'>Sign Up</button>
      </div>
      
      
    </div>
  ) 
}

export default Navbar