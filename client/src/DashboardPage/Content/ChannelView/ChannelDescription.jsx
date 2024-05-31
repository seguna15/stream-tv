import React from 'react'
import { useFollowChannel, useUserDetails } from '../../../shared/hooks';

const FollowButton = ({ channelId, getChannels }) => {
  const { followChannel } = useFollowChannel();
  const handleFollowChannel = () => {
    followChannel(channelId, getChannels);
  };
  return (
    <button
      onClick={handleFollowChannel}
      className="px-8 py-1 text-sm text-gray-900 bg-gray-300 rounded-md shadow-md dark:bg-gray-500 dark:text-white"
    >
      Follow
    </button>
  );
};

export const ChannelDescription = ({
  channelId,
  username,
  title,
  description,
  getChannels,
}) => {
  const { isLogged } = useUserDetails();
  return (
    <div className="flex flex-col mt-2 text-gray-900 dark:text-white">
      <span className="flex items-center gap-2 text-2xl">
        {username}
        {isLogged && (
          <FollowButton channelId={channelId} getChannels={getChannels} />
        )}
      </span>
      <span className="text-xl">{title}</span>
      <div className="text-[16px] p-2 text-gray-900 bg-slate-300 w-fit mt-2">
        <span>{description}</span>
      </div>
    </div>
  );
};

