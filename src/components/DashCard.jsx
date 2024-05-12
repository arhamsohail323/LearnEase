import React from 'react'

const DashCard = ({type,label,color,value}) => {
  return (
    <div className='bg-cardbg w-full rounded-xl py-8 px-5 flex justify-between '>
                <div className=''>
                <h1 className={`text-lg text-[${color}]`}>
                    {label}
                </h1>
                <p className='text-gray-400'>
                    {type}
                </p>
                </div>
                <div className=''>
                <h1 className='text-3xl font-semibold'>
                    {value}
                </h1>
                </div>
            </div>
  )
}

export default DashCard