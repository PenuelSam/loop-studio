import React from 'react'
import { interactive } from '../images/desktop'
import { interactiveMob } from '../images/mobile'
const Interactive = () => {
  return (
    <div className='flex justify-between md:flex-row flex-col items-center md:px-[5rem]  px-[1rem] md:py-[5rem] py-[3rem]'>
      <div className='flex-1'>
        <img src={interactive} alt="" className='sm:flex  hidden relative' />
        <img src={interactiveMob} alt="" className='sm:hidden flex' />
      </div>
      <div className='flex-1 md:w-[50%] bg-White md:absolute top-[65rem] right-[2rem]  sm:px-[5rem] py-[5rem]'>


        <h1 className='uppercase text-[40px] sm:text-[50px] leading-[3rem]  font-JosefinSans font-[300] md:text-start text-center'>The Leader in  interactive vr</h1>
        <p className='md:text-[18px] text-[20px] mt-[1.5rem] text-darkGray md:text-start text-center md:leading-[1.5rem] leading-[2rem] '>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creation have transformed business through digital experiences that bind to their brand. </p>
      </div>
    </div>
  )
}

export default Interactive
