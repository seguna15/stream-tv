import React from 'react'
import { Messages } from './Messages'
import { NewMessageInput } from './NewMessageInput'

export const Chat = ({channelId}) => {
  return (
    <div className='w-full lg:w-[20%] text-3xl text-gray-500 dark:text-white '>
      <div>
        <span className="text-xl text-gray-900 capitalize dark:text-white">stream chat</span>
      </div>
      <Messages messages={[]} />
      <NewMessageInput sendMessage={() => {}} />
    </div>
  )
}

