import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex justify-between mt-10 gap-5 screen'>
        <div className='py-6 px-9 w-[45%] rounded-xl bg-red-500'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='py-6 px-9 w-[45%] rounded-xl bg-blue-500'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='py-6 px-9 w-[45%] rounded-xl bg-green-500'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='py-6 px-9 w-[45%] rounded-xl bg-yellow-500'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber