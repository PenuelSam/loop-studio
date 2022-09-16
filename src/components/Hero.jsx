import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='hero box-border md:px-[5rem]  px-[1rem] md:py-[5rem] py-[3rem]'>
    <Navbar />
    <div className='uppercase mt-[7rem] border-[3px] md:w-[50%] max:x-w-[100%] sm:w-[70%] py-[2.5rem] px-[1rem] font-JosefinSans sm:leading-[4rem] leading-[3rem] mb-[12rem] text-White sm:text-[70px] text-[50px] '>
      <span>immersive</span><br />
      <span>experience</span><br />
      <span>that deliver</span><br />
    </div>
    </div>
  )
}

export default Hero
