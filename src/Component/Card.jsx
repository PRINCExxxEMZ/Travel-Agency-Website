import React from 'react'


const Card = (props) => {
  return (
      <div className='relative '>
        <img className='w-full h-full object-cover'src={props.bg} alt="/" />
        <div className=' bg-gray-900/30 absolute w-full h-full left-0 top-0 ' >
            <p className='left-4 bottom-4 text-3xl font-bold text-white absolute '>{props.text}</p>
        </div>
      </div>
  )
}

export default Card
