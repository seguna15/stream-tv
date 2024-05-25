import React from 'react';
import { ChannelCard } from './ChannelCard';


export const dummyChannels = [
    
    {
        id: 1,
        title: 'test',
        avatarUrl: null,
        username: 'Martin',
        isOnline: false,
    },
    {
        id: 2,
        title: 'test1',
        avatarUrl: null,
        username: 'Marta',
        isOnline: true,
    },
    {
        id: 3,
        title: 'test3',
        avatarUrl: null,
        username: 'Josh',
        isOnline: false,
    },
    {
        id: 4,
        title: 'test4',
        avatarUrl: null,
        username: 'Anna',
        isOnline: false,
    }
   
]



export const Channels = () => {
  return (
    <div className='flex flex-wrap items-center gap-8 mt-4 justify-evenly' >
        {
        dummyChannels.map((c) => (
            <ChannelCard key={c.id} title={c.title} username={c.username} isOnline={c.isOnline} avatarUrl={c.avatarUrl} navigateToChannelHandler={() => {}}/>
        ))
    }
    </div>
  );
};
