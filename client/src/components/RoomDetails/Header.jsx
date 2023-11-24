import React from 'react'
import Heading from '../Heading'
const Header = ({ roomData }) => {
  return (
    <>
      <Heading title={roomData.title} subtitle={roomData.location} />
      <div className='w-full md:h-[70vh] overflow-hidden rounded-xl'>
        <img
          className='object-cover w-full mt-3'
          src={roomData.image}
          alt='header image'/>
      </div>
    </>
  )
}

export default Header