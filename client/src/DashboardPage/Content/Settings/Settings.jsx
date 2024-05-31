import React from 'react'
import { StreamKey } from './StreamKey'
import { ChannelSettings } from './ChannelSettings'
import { PasswordSettings } from './PasswordSettings'
import { useChannelSettings } from '../../../shared/hooks'
import { LoadingSpinner } from '../../../shared/Components'


export const Settings = () => {
  const { channelSettings, isFetching, saveSettings } = useChannelSettings();

  if (!channelSettings) {
    return <LoadingSpinner/>;
  }
  
  return (
    <div className="flex flex-col w-full">
      <span className="text-xl text-gray-800 dark:text-white">Settings</span>
      <ChannelSettings settings={channelSettings} saveSettings={saveSettings}/>
      <PasswordSettings />
      <StreamKey streamKey={channelSettings.streamKey} />
    </div>
  );
}

