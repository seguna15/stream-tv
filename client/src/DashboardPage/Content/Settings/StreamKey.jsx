import React from 'react'

export const StreamKey = ({streamKey}) => {
  return (
    <div className='p-2 mt-3 bg-gray-300 rounded-md outline-1 ring-offset-neutral-100'>
        <span className='text-xl text-gray-900'>{streamKey}</span>
    </div>
  )
}
