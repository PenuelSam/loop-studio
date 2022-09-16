import React from 'react'
import Ourcreations from './Ourcreations'
import { creations, creations2 } from '../constant'
const Creations = () => {
  return (
    <>
    <Ourcreations />
    
    <div className='md:flex hidden flex-wrap justify-center gap-10 items-center md:px-[4rem]  md:py-[1rem]'>
      {creations.map((create)=> (
        <div key={create.id}>
          <img src={create.image} alt="" className='scale cursor-pointer' />
          <p className='relative bottom-[5rem] text-White font-JosefinSans cursor-pointer font-[400] left-[3rem] leading-[16.5px] px-[1rem] uppercase text-[18px]'>
           <span> {create.title1}</span><br />
           <span> {create.title2}</span> 

          </p>
        </div>
      ))}
    </div>

    <div className='md:hidden flex flex-col justify-center items-center  px-[1rem] '>
      {creations2.map((create)=> (
        <div key={create.id} className='hover:text-black'>
          <img src={create.image} alt="" className='scale cursor-pointer' />
          <p className='relative  bottom-[6rem] sm:bottom-[10rem] cursor-pointer text-White font-JosefinSans font-[400] left-[0rem] sm:leading-[4.5rem] leading-[2.5rem]  px-[1rem] uppercase sm:text-[60px] text-[40px]'>
           <span> {create.title1}</span><br />
           <span> {create.title2}</span> 

          </p>
        </div>
      ))}
      <div>
    <button className=' relative bottom-[4rem] border-[2px] border-black sm:px-[5rem] px-[3rem] font-JosefinSans tracking-widest font-bold sm:text-[30px] sm:py-2 py-1 hover:bg-black hover:text-White'>
        SEE ALL
      </button>
    </div>
    </div>
    </>
  )
}

export default Creations
