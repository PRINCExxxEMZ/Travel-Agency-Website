import React from 'react'
import img from '../Asset/Hero-img (1).jpg'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full relative h-screen'>
        {/* <img className='w-full h-full object-cover' src={img}/> */}
        <img className='w-full h-full object-cover'  src={img} alt="/" />

        <div className='w-full h-full absolute top-0 left-0 bg-gray-900/60'> 
        </div>
      <div className='absolute h-full  w-full top-0 flex flex-col justify-center text-center text-white p-4'>
        <h1>First Class Waters</h1>
        <h2>Travel Top Location WorldWide </h2>
        <form className='mt-5 flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'> 
          <div>
            <input className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none' type="text" placeholder='Search Destination'/>
          </div>
          <div>
            <button> <AiOutlineSearch size={20}/></button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Hero
