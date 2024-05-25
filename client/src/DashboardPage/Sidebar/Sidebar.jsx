import React from 'react'

const followedChannels = [
  {
    id: 1,
    username: "Martin",
    isOnline: false,
  },
  {
    id: 2,
    username: "Marta",
    isOnline: true,
  },
  {
    id: 3,
    username: "Josh",
    isOnline: false,
  },
];


export const Sidebar = () => {
  return (
    <>
      <aside
        id="sidebar"
        class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-[60px] font-normal duration-75 lg:flex transition-width"
        aria-label="Sidebar"
      >
        <div class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <ul className="space-y-2 font-medium">
                <li className="flex items-center p-2 text-xl text-gray-900 capitalize rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span className="ms-3">for you</span>
                </li>
                <li className="flex items-center p-2 text-sm font-bold uppercase rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    followed channels
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col justify-center px-4 mt-2 space-y-2 text-gray-500 border-gray-200 text-md dark:text-white dark:border-gray-700">
                {followedChannels.map((channel) => {
                  return (
                    <div key={channel.id} className="flex justify-between">
                      <span>{channel.username}</span>
                      <span
                        style={{
                          color: channel.isOnline ? "green" : "red",
                        }}
                      >
                        {channel.isOnline ? "Online" : "Offline"}
                      </span>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

