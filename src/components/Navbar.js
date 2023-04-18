import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import navbarLinks from '../links/links'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const displayHamburger = () => {
    setHidden(!hidden)
  }
  return (
    <div id='navbar'>
      <div className='container max-w-6xl mx-auto px-6 py-12 '>
        <nav className='flex items-center justify-between font-bold text-white md:flex-row'>
          <img src={logo} alt='' />

          <div className='hidden h-10 font-alata text-xl md:flex md:space-x-8'>
            {navbarLinks.map((links, index) => (
              <div className='group'>
                <div key={index}>{links.label}</div>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
            ))}
          </div>
          <div className='md:hidden' id='menu-btn'>
            <button
              className='z-40 block hamburger md:hidden focus:outline-none'
              type='button'
              onClick={displayHamburger}
            >
              <span className={`hamburger-top ${!hidden && 'open'}`}></span>
              <span
                className={`hamburger-middle ${!hidden && 'hidden'}`}
              ></span>
              <span className={`hamburger-bottom ${!hidden && 'open'}`}></span>
            </button>
          </div>
        </nav>

        {!hidden && (
          <div
            id='menu'
            className='absolute  top-0 bottom-0 left-0 flex-col self-end  w-full mih-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black'
          >
            {navbarLinks.map((links, index) => (
              <div key={index} className='hover:text-pink-50'>
                {links.label}
              </div>
            ))}
          </div>
        )}
        <div className='max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl'>
          Impressive Experiences that deliver
        </div>
      </div>
    </div>
  )
}

export default Navbar
