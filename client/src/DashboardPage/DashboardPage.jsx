import React from 'react'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'
import { Content } from './Content';

export const DashboardPage = () => {
  return (
    <>
      <Nav />
      <main class="flex w-full pt-16  bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <Content/>
      </main>
    </>
  );
}

