import React from 'react'
import imageUrl from '../../../resources/images/avatar.jpeg'

const ChannelAvatar = ({url}) => {
    
    return (
      <img
        class="p-4 rounded-t-lg"
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
        navigateToChannelHandler()
    }

  return (
    <div class="w-full lg:w-64 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <ChannelAvatar url="" />
      </a>
      <div class="px-5 pb-5">
        <div class="flex flex-col gap-2">
          <span class="text-[16px] capitalize font-bold text-gray-900 dark:text-white">
            {title}
          </span>
          <span
            class="text-white font-medium  text-[14px] "
            style={{
              color: isOnline ? "green" : "red",
            }}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {username}
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}

