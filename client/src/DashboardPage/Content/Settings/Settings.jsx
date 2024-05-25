import React from 'react'
import { StreamKey } from './StreamKey'
import { ChannelSettings } from './ChannelSettings'
import { PasswordSettings } from './PasswordSettings'

const channelSettings = {
    title: 'title',
    description: 'description',
    avatarUrl: 'none',
    username: "Martin",
    streamKey: "1234",
}

export const Settings = () => {
  return (
    <div className="flex flex-col w-full">
      <span className="text-xl text-gray-800 dark:text-white">Settings</span>
      <ChannelSettings settings={channelSettings} />
      <PasswordSettings />
      <StreamKey streamKey={channelSettings.streamKey} />
    </div>
  );
}

