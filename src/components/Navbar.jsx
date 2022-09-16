import React, { useState } from 'react'
import { logo, close, menu } from '../images'
import { navLinks } from '../constant'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <nav className='flex justify-between items-center navbar'>
    <div>
        <img src={logo} alt="" className='relative z-[5]' />
    </div>

    <ul className='list-none md:flex hidden justify-end item-center flex-1'>
      {navLinks.map((nav,index) => (
        <li
        key={nav.id}
        className={`font-Alata
        font-[400]
        hover:border-b-2
        cursor-pointer text-[16px]
        text-white ${index === navLinks.length - 1
         ? 'mr-0' : 'mr-10'}`}
        >
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
      ))}
    </ul>

    <div className='md:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu}
           alt="menu"
           className='w-[28px] relative z-[5] h-[28px] object-contain'
           onClick={() => setToggle(prev => !prev)} />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black z-[1]
          absolute top-0 left-0 mx-0 my-0  w-[100%]  h-[100vh]  sidebar`}>
                <ul className='list-none flex flex-col justify-end item-center flex-1'>
      {navLinks.map((nav,index) => (
        <li
        key={nav.id}
        className={`font-Alata
        font-[400]
        relative
        sm:bottom-[25rem]
        bottom-[10rem]
        tracking-wide
        uppercase
        items-center
        cursor-pointer text-[30px]
        text-darkGray ${index === navLinks.length - 1
         ? 'mr-0' : 'mb-4'}`}
        >
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
      ))}
    </ul>
          </div>

        </div>

    </nav>
  )
}

export default Navbar
