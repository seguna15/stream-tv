import React from 'react'

export const ChannelDescription = ({username, title, description}) => {
  return (
    <div className='flex flex-col text-gray-900 dark:text-white'>
      <span className='text-2xl'>{username}</span>
      <span className='text-xl'>{title}</span>
      <div className="text-[16px] p-2 text-gray-900 bg-slate-300 w-fit mt-2">
        <span>{description}</span>
      </div>
    </div>
  )
}

