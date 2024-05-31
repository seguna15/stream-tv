import React from 'react'
import imageUrl from '../../../resources/images/avatar.jpeg'

const ChannelAvatar = ({url}) => {
    
    return (
      <img
        className="p-4 rounded-t-lg"
        src={url || imageUrl}
        alt="channel image"
        width="100%"
        height="100%"
      />
    );
}

export const ChannelCard = ({
    title, id, username, isOnline, avatarUrl, navigateToChannelHandler
}) => {

    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={handleNavigate}>
      <ChannelAvatar url={avatarUrl} />
      <div className="px-5 pb-5">
        <div className="flex flex-col gap-2">
          <span className="text-[16px] capitalize font-bold text-gray-900 dark:text-white">
            {title}
          </span>
          <span
            className="text-white font-medium  text-[14px] "
            style={{
              color: isOnline ? "green" : "red",
            }}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
          <span>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {username}
            </h5>
          </span>
        </div>
      </div>
    </div>
  );
}

