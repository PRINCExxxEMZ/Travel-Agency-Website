import React from 'react'
import { useState } from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'


const Navbar = () => {
  const [nav,setNav] = useState(false);
  const [logo,SetLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    SetLogo(!logo);
  };
    return (
       <div className='w-full justify-between items-center h-20 flex px-4 absolute z-10 text-white '>
          <div>
            <h2 onClick={handleNav} className={logo ? 'hidden' : 'block cursor-pointer'} >WATER.</h2>
          </div>
            <ul className='hidden md:flex'>
                <li className='hover:text-[var(--primary-dark)] cursor-pointer'>Home</li>
                <li className='hover:text-[var(--primary-dark)] cursor-pointer'>Destination</li>
                <li className='hover:text-[var(--primary-dark)] cursor-pointer'>Travel</li>
                <li className='hover:text-[var(--primary-dark)] cursor-pointer'>Veiw</li>
                <li className='hover:text-[var(--primary-dark)] cursor-pointer'>Book</li>
                <li className='hover:text-[var(--primary-dark)] cursor-pointer'>Contact</li>
            </ul>
            <div className='hidden md:flex gap-7'>
                <BiSearch size={25} className='hover:text-[var(--primary-dark)] cursor-pointer'/>
                <BsPerson size={25} className='hover:text-[var(--primary-dark)] cursor-pointer'/>
            </div>

        <div onClick={handleNav}className='md:hidden z-10'>
          {nav ? <AiOutlineClose size={25}/> : <HiOutlineMenuAlt4 size={25}/>}
        </div>

        <div onClick={handleNav} className={nav ?'absolute text-white left-0 top-0 w-full bg-sky-500/90 px-4 py-7 flex flex-col': 'absolute left-[-100%]'}>
          <ul>
                <h1>WATER.</h1>
                <li className='border-b'>Home</li>
                <li className='border-b'>Destination</li>
                <li className='border-b'>Travel</li>
                <li className='border-b'>Veiw</li>
                <li className='border-b'>Book</li>
                <li className='border-b'>Contact</li>

                <div className='flex flex-col'>
                  <button className='my-6'>Search</button>
                  <button>Account</button>
                </div>
                <div className='flex justify-between my-6'>
                  <FaFacebook className='hover:text-[var(--primary-dark)] cursor-pointer'/>
                  <FaTwitter className='hover:text-[var(--primary-dark)] cursor-pointer'/>
                  <FaPinterest className='hover:text-[var(--primary-dark)] cursor-pointer'/>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
