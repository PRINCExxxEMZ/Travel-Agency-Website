import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
      <div className='sm:flex text-center justify-between items-center'>
        <h2>WATER.</h2>
        <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                  <FaFacebook className='text-[var(--priamry-light)] hover:text-[var(--primary-dark)] cursor-pointer icon'/>
                  <FaTwitter className='text-[var(--priamry-light)] hover:text-[var(--primary-dark)] cursor-pointer icon'/>
                  <FaPinterest className='text-[var(--priamry-light)] hover:text-[var(--primary-dark)] cursor-pointer icon'/>
        </div>
      </div>
      <div className='flex justify-between'>
              <ul className='lg:flex md:flex'>
                <li className='text-black cursor-pointer hover:text-sky-700'>About</li>
                <li className='text-black cursor-pointer hover:text-sky-700'>Partnership</li>
                <li className='text-black cursor-pointer hover:text-sky-700'>Careers</li>
                <li className='text-black cursor-pointer hover:text-sky-700'>Special Service</li>
                <li className='text-black cursor-pointer hover:text-sky-700'>Newsletter</li>
                <li className='text-black cursor-pointer hover:text-sky-700'>Advertising</li>
              </ul>
              <ul className='text-right lg:flex md:flex'>
                <li className='text-black cursor-pointer hover:text-sky-700'>Home</li>
                <li className='text-black cursor-pointer hover:text-sky-700'>Destination</li>
                <li className='text-black cursor-pointer hover:text-sky-700'>Travel</li>
                <li className='text-black cursor-pointer hover:text-sky-700'>Veiw</li>
                <li className='text-black cursor-pointer hover:text-sky-700'>Book</li>
                <li className='text-black cursor-pointer hover:text-sky-700'>Contact</li>
      </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer
