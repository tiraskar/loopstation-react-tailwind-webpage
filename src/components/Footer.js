import React from 'react'
import logo from '../assets/images/logo.svg'
import facebook from '../assets/images/icon-facebook.svg'
import instagram from '../assets/images/icon-instagram.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import twitter from '../assets/images/icon-twitter.svg'
import navbarLinks from '../links/links'

const Footer = () => {
  return (
    <div id='footer' className='bg-black'>
      <div className='container max-w-6xl py-10 mx-auto'>
        <div className='flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start'>
          <div className='h-8'>
            <img src={logo} alt='' />
          </div>
          <div className='flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3'>
            {navbarLinks.map((link, index) => (
              <div className='group  text-white md:flex md:flex-row'>
                <h5 key={index} className='group-hover:border-b-2'>
                  {link.label}
                </h5>
              </div>
            ))}
          </div>
          <div className='justify-between space-y-4 text-gray-500 '>
            <div className=' item-center justify-center mx-auto space-x-4 md:justify-end md:mx-0'>
              <div className='flex flex-row space-x-4  h-8 group'>
                {socialIcon.map((socialImg, index) => (
                  <img
                    key={index}
                    src={socialImg.imgIcon}
                    alt=''
                    className='h-6'
                  />
                ))}
              </div>
            </div>
            <div>
              <p className='font-bold'>2023 Loopstudios. All right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

const socialIcon = [
  { imgIcon: facebook },
  { imgIcon: instagram },
  { imgIcon: pinterest },
  { imgIcon: twitter },
]
