import React from 'react'
import curiosityMb from '../assets/images/mobile/image-curiosity.jpg'
import curiosityDes from '../assets/images/desktop/image-curiosity.jpg'
import deepEarthMb from '../assets/images/mobile/image-deep-earth.jpg'
import deepEarthDes from '../assets/images/desktop/image-deep-earth.jpg'
import fisheyeMb from '../assets/images/mobile/image-fisheye.jpg'
import fisheyeDes from '../assets/images/desktop/image-fisheye.jpg'
import aboveMb from '../assets/images/mobile/image-from-above.jpg'
import aboveDes from '../assets/images/desktop/image-from-above.jpg'
import gridMb from '../assets/images/mobile/image-grid.jpg'
import gridDes from '../assets/images/desktop/image-grid.jpg'
import soccerMb from '../assets/images/mobile/image-soccer-team.jpg'
import soccerDes from '../assets/images/desktop/image-soccer-team.jpg'
import arcadeMb from '../assets/images/mobile/image-night-arcade.jpg'
import arcadeDes from '../assets/images/desktop/image-night-arcade.jpg'
import pocketMb from '../assets/images/mobile/image-pocket-borealis.jpg'
import pocketDes from '../assets/images/desktop/image-pocket-borealis.jpg'

const Creations = () => {
  return (
    <div id='creation'>
      <div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0 '>
        <div className=' md:flex md:flex-row md:justify-between'>
          <h2 className='text-4xl text-center uppercase md:text-5xl md:capitalize md:text-left'>
            Our Creation
          </h2>
          <button className='hidden px-10 py-2 my-0 font-bold border-2 border-black  md:block'>
            See All
          </button>
        </div>
        <div className='  justify-between space-y-6 md:mt-20 md:grid md:grid-cols-4 md:gap-4 md:m-0 md:space-y-0 '>
          {data.map((creation, index) => (
            <div
              key={index}
              className='group relative overflow-hidden  md:px-0'
            >
              <img
                src={creation.imgDes}
                alt=''
                className='hidden duration-200 md:block w-full group-hover:scale-110'
              />
              <img src={creation.imgMb} alt='' className='md:hidden' />
              <div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-60 group-hover:to-white group-hover:opacity-70'></div>
              <h5 className='absolute px-6 text-2xl uppercase text-white duration-200 w-52 bottom-4  md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black'>
                {creation.text}
              </h5>
            </div>
          ))}
        </div>

        <div className='flex justify-center'>
          <button className=' px-10 py-2 mt-10 font-bold border-2 border-black  md:hidden'>
            See All
          </button>
        </div>
      </div>
    </div>
  )
}

export default Creations

const data = [
  {
    text: 'Deep Earth',
    imgMb: deepEarthMb,
    imgDes: deepEarthDes,
  },
  {
    text: 'Night arcade',
    imgMb: arcadeMb,
    imgDes: arcadeDes,
  },
  {
    text: 'Socker Team Vr',
    imgMb: soccerMb,
    imgDes: soccerDes,
  },
  {
    text: 'The grid',
    imgMb: gridMb,
    imgDes: gridDes,
  },
  {
    text: 'From Up Above VR',
    imgMb: aboveMb,
    imgDes: aboveDes,
  },
  {
    text: 'Rockets Borealis',
    imgMb: pocketMb,
    imgDes: pocketDes,
  },
  {
    text: 'The Curiosity',
    imgMb: curiosityMb,
    imgDes: curiosityDes,
  },
  {
    text: 'Make it Fisheye',
    imgMb: fisheyeMb,
    imgDes: fisheyeDes,
  },
]
