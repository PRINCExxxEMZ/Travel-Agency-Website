import React from 'react'
import img from '../Asset/Hero-img (1).jpg'
import iimg from '../Asset/Hero-img (2).jpg'

const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1> All-Inclusive Resorts</h1>
      <p className='py-4'>On the Caribbean's Best Beaches</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-3 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={iimg} alt="/" />
        <img className='w-full h-full object-cover' src={img} alt="/" />
        <img className='w-full h-full object-cover' src={iimg} alt="/" />
        <img className='w-full h-full object-cover' src={img} alt="/"/>
        <img className='w-full h-full object-cover' src={iimg} alt="/" />
      </div>
    </div>
  )
}

export default Destination
