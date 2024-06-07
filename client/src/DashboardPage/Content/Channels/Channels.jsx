import React from 'react';
import { ChannelCard } from './ChannelCard';
import {useNavigate} from 'react-router-dom'



export const Channels = ({channels}) => {
  const navigate = useNavigate();

  const handleNavigateToChannel = (id) => {
    navigate(`/channel/${id}`)
  }
  
  return (
    <div className='flex flex-wrap items-center gap-8 mt-4 justify-evenly' >
        {
        channels.map((c) => (
            <ChannelCard key={c.id} id={c.id} title={c.title} username={c.username} isOnline={c.isOnline} avatarUrl={c.avatarUrl} navigateToChannelHandler={handleNavigateToChannel}/>
        ))
    }
    </div>
  );
};
