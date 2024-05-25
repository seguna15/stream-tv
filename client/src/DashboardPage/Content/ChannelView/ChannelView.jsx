import React from 'react'
import {Chat} from './Chat'
import { ChannelDescription } from './ChannelDescription';

const channelDetails = {
    id: 1,
    title: 'Gaming channel',
    description: "Playing some RPG",
    username: "Gamer",
    isOnline: false
}

export const ChannelView = () => {
  return (
    <div className="flex w-full">
      <div className="w-full lg:w-[80%] text-gray-500 dark:text-white p-4 ">
        <div className='flex items-center justify-center w-full h-1/2 lg:h-[600px] border border-red-50 shadow-slate-100 rounded'>
          <span className="text-4xl">Channel is Offline</span>
        </div>
        <ChannelDescription
          channelId={channelDetails.id}
          title={channelDetails.title}
          description={channelDetails.description}
          username={channelDetails.username}
        />
      </div>
      <Chat />
    </div>
  );
}

