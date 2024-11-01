import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
// importing the external link
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img
           src= {headerLogo}
           alt="Logo"
           width={130}
           height={29}
          />
        </a>
        {/* unordered links */}
 
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {/* here using the hidden , it only show in the desktop view */}
          {/* here in usulally you write a list of li an style it, but insted of doing that we create that logic in a seperate file & folder so that we can simply link here -- so we created a folder called constants and open a new index.js file in it -----Its is a kind of CMS (content management system method)*/}
          {navLinks.map((item) =>(
            <li key={item.label}>
              <a 
                href= {item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* hamurger and only work on the mobile view*/}
        <div className='hidden max-lg:block'>
          <img 
            src= {hamburger}
            alt="menu-icon" 
            width={25}
            height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav