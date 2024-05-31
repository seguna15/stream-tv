import React, { useEffect } from 'react'
import {Chat} from './Chat'
import { ChannelDescription } from './ChannelDescription';
import { useChannelDetails } from '../../../shared/hooks';
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '../../../shared/Components';



export const ChannelView = ({ getChannels }) => {
  const { id } = useParams();

  const { isFetching, getChannelDetails, channelDetails } = useChannelDetails();

  useEffect(() => {
    getChannelDetails(id);
  }, []);

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex w-full">
      <div className="w-full lg:w-[80%] text-gray-500 dark:text-white p-4 ">
        <div className="flex items-center justify-center w-full h-1/2 lg:h-[600px] border border-red-50 shadow-slate-100 rounded">
          <span className="text-4xl">Channel is Offline</span>
        </div>
        <ChannelDescription
          channelId={channelDetails.id}
          title={channelDetails.title}
          description={channelDetails.description}
          username={channelDetails.username}
          getChannels={getChannels}
        />
      </div>
      <Chat />
    </div>
  );
};

