import React from 'react'
import Card from './Card'
import img from '../Asset/Hero-img (1).jpg'
import iimg from '../Asset/Hero-img (2).jpg'


const Best = () => {
  return (
    <div>
        <h2 className='text-center'> Top Visit</h2>
        <div className='max-w-[1240px] mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 '>

        <Card bg={img} text='Bora Bora'/>
        <Card bg={img} text='Lagos'/>
        <Card bg={iimg} text='Emmanuel House'/>
        <Card bg={img} text='Ify Nation'/>
        <Card bg={iimg} text='Nonso Room'/>
        <Card bg={img} text='Bora Bora'/>
        </div>
    </div>
  )
}

export default Best
