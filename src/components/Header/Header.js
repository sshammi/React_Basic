import React from 'react'
import profile from '../../images/profile.png'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-4 m-4 border-b-2'>
      <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  )
}
