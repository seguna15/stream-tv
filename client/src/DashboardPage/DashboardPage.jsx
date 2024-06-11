import React, { useEffect } from 'react'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'
import { Content } from './Content';
import { useChannels } from '../shared/hooks';
import { useUserDetails } from '../shared/hooks';
import { LoadingSpinner } from '../shared/Components';
import { connectWithSocketServer } from '../socketConn';

export const DashboardPage = () => {
  const {getChannels, isFetching, followedChannels, allChannels} = useChannels();
  const { isLogged } = useUserDetails();

  useEffect(() => {
    getChannels(isLogged)
    connectWithSocketServer()
  },[])

  if(isFetching){
    return <LoadingSpinner/>
  }

  return (
    <>
      <Nav />
      <main className="flex w-full pt-16 bg-gray-50 dark:bg-gray-900">
        <Sidebar channels={followedChannels}/>
        <Content channels={allChannels} getChannels={getChannels}/>
      </main>
    </>
  );
}

