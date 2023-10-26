import React from 'react'
// import {RiCustomerService2Full, RiCustomerService2Full } from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';

const About = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='flex flex-col lg:col-span-2 justify-evenly'>
            <div>
            <h3> LUXURY INCLUDE VACATION FOR TWO PEOPLE </h3>
            <p className='py-8'>Come experience the very pinnacle of luxury Caribbaen all-include vacation for couples
            Come experience the very pinnacle of luxury Caribbaen all-include vacation for couples
            experience the very pinnacle of luxury Caribbaen all-include vacation for couples
            Come experience the very pinnacle of luxury Caribbaen all-include vacation for couples
            the very pinnacle of luxury Caribbaen all-include vacation for couples
            Come experience the very pinnacle of luxury Caribbaen all-include vacation for couples
            experience the very pinnacle of luxury Caribbaen</p>
            </div>
            <div className='grid sm:grid-col-2 py-2'>

                <div className=' flex flex-col lg:flex-row items-center text-center gap-10'>
                <div>
                    <button>
                        <MdOutlineTravelExplore size={50}/>
                    </button>
                </div>
                    <div>
                        <h3> Leading Service </h3>
                        <p>All Iclusive Company For<br/> 20 Years In a Row</p>
                    </div>

                <div className=' flex flex-col lg:flex-row items-center text-center gap-10'>
                <div>
                    <button>
                        <MdOutlineTravelExplore size={50}/>
                    </button>
                </div>
               <div>
                    <h3>Leading to Water</h3>
                    <p>All the way to the Caribbean</p>
               </div>
             </div>
        </div>

        </div>
    </div>


            <div>
               <div className='border text-center'>
                    <p className='pt-3'>GET AN ADDITIONAL 10% OFF</p>
                    <p className='py-4'>10 HOURS LEFT</p>
                    <p className='text-white bg-gray-800 py-3'>BOOK NOW AND SAVE UP</p>
               </div>
               <form className='w-full'>
               <div className='flex flex-col my-2'>
                <label className=''>Destination </label>
                    <select className='py-3 border'>
                        <option>Lagos</option>
                        <option>My Emmanuel HOUSE</option>
                        <option>Stay Your House</option>
                        <option>Jos</option>
                        <option>EPE</option>
                        <option>Lagos</option>
                    </select>
               </div>

               <div className='flex flex-col my-2' >
                <label>Check In</label>
                <input  className='py-3 border' type="date"/>
               </div>

               <div className='flex flex-col my-2'>
                <label>Check Out</label>
                <input  className='py-3 border' type="date"/>
               </div>
                    <button className='w-full my-2 font-extrabold'>BOOK TRIP</button>
               </form>
        
            </div>
        </div>
  )
}

export default About
