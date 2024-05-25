import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../resources/images/logo-copy.svg'

const NavLogo = () => {
    return (
      <img src={logo} alt="twitch tv" title="twitch tv" class="h-8 mr-3" />
    );
}

const NavButton = ({ text, onClickHandler }) => {
  return (
    <span
      className="self-center text-lg font-medium capitalize whitespace-nowrap dark:text-white"
      onClick={onClickHandler}
    >
      {text}
    </span>
  );
};

const NavLink = ({ text }) => {
  return (
    <li>
      <Link
        href="#"
        className="block px-3 py-2 text-gray-900 capitalize rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        {text}
      </Link>
    </li>
  );
};
export const Nav = () => {
  return (
    <nav class="fixed z-30 w-full h-[60px] bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="flex ml-2 md:mr-24">
              <NavLogo />
              <NavButton text="Browse" onClickHandler={() => {}} />
            </div>
          </div>
          <div class="flex items-center">
            <NavButton text="login" onClickHandler={() => {}} />
            {/* <ul className="flex flex-col mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <NavLink text="my account" />
              <NavLink text="logout" />
            </ul> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

