import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>Ansar</span></h1>
        <button className='bg-red-600 text-white px-5 py-2 rounded-md text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header