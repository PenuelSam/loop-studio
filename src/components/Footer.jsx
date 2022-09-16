import React from 'react'
import { logo, facebook, twitter, pinterest, instagram } from '../images'
import { navLinks } from '../constant'
const Footer = () => {
  return (
    <div className=' bg-black flex md:flex-row flex-col md:justify-between items-center justify-center md:px-[5rem]  px-[1rem] md:py-[5rem] py-[3rem]'>
      <div className='flex flex-col'>
        <img src={logo} alt="" className='md:w-[50%]' />
        <ul className='list-none mt-5 flex md:flex-row flex-col'>
          {navLinks.map((nav, index)=> (
            <li key={nav.id} className={`flex md:ml-0 ml-[4rem] text-white font-JosefinSans ${index === navLinks.length - 1 ? 'sm:mr-0 mb-0' : 'sm:mr-5 mb-5'}`}>
              <a href={`${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col'>
          <div className='flex md:justify-end justify-center md:mt-0 mt-5 gap-5'>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
          </div>
          <div>
            <p className='text-White font-JosefinSans mt-5'>&copy; 2022 Loopstudios. All rights reserved</p>
          </div>
      </div>
    </div>
  )
}

export default Footer
