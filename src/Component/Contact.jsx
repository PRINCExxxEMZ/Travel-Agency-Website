import React from 'react'

const Contact = () => {
  return (
    <div className='text-center'>
      <div className='max-w-[1240px] mx-auto py-16 px-4 '>
        <h1 className='py-2'> Contact Us</h1>
        <div className='py-3 text-center'>
        <h4 className='font-bold'>First Name</h4>
        <input className='py-3 border px-10 text-left rounded-lg' type="Name" placeholder='Emmanuel' name="Name"/>
        </div>
        <div className='py-3 text-center'>
        <h4 className='font-bold'>Last Name</h4>
        <input className='py-3 border px-10 rounded-lg' type="Name" placeholder='smith' name="Name"/>
        </div>
        <div className='py-3 text-center'>
        <h4 className='font-bold'>Email</h4>
        <input className='py-3 border px-10 rounded-lg' type="email" placeholder='Emmanuel@gmail.com' name="email"/>
        </div>
        <div className='py-3 text-center'>
        <h4 className='font-bold'>Booking Details</h4>
        <input className='py-20 border px-10 rounded-lg' type="message" placeholder='' name="Message"/>
        </div>
        <div className='text-center'>
        <button className='px-[122px] py-3 '>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
