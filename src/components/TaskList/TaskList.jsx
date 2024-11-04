import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='overflow-x-auto h-[55%] w-full flex justify-start items-center flex-nowrap gap-5 py-5 mt-10 '>
        <div className='flex-shrink-0 h-full w-[300px]  p-5 rounded-2xl bg-red-400 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h3 className='text-sm'>4 sep 2024</h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>addfghvujhb juktfbj vjvuylu bjhbi hbjhy bvhg jvuj hjbjbbk kbkjbm jhvhgvj vhvjvj jhbhjvg hjvhvhvjh</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px]  p-5 rounded-2xl bg-green-400 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h3 className='text-sm'>4 sep 2024</h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>addfghvujhb juktfbj vjvuylu bjhbi hbjhy bvhg jvuj hjbjbbk kbkjbm jhvhgvj vhvjvj jhbhjvg hjvhvhvjh</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px]  p-5 rounded-2xl bg-yellow-400 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h3 className='text-sm'>4 sep 2024</h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>addfghvujhb juktfbj vjvuylu bjhbi hbjhy bvhg jvuj hjbjbbk kbkjbm jhvhgvj vhvjvj jhbhjvg hjvhvhvjh</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px]  p-5 rounded-2xl bg-blue-400 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h3 className='text-sm'>4 sep 2024</h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>addfghvujhb juktfbj vjvuylu bjhbi hbjhy bvhg jvuj hjbjbbk kbkjbm jhvhgvj vhvjvj jhbhjvg hjvhvhvjh</p>
        </div>
        
    </div>
  )
}

export default TaskList