import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Channels } from './Channels';
import { ChannelView } from './ChannelView';
import { Settings } from './Settings';

export const Content = ({channels, getChannels}) => {
  return (
    <section className="w-full min-h-[100dvh] overflow-y-auto bg-gray-50 lg:ml-[270px] dark:bg-gray-900">
      <Routes>
        <Route path="settings" element={<Settings />} />
        <Route path="channels" element={<Channels channels={channels}/>} />
        <Route path="channel/:id" element={< ChannelView getChannels={getChannels}/>} />
      </Routes>
    </section>
  );
}

