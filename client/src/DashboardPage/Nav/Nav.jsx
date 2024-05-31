import React from 'react'
import logo from '../../resources/images/logo-copy.svg'
import { useUserDetails } from '../../shared/hooks';
import { useNavigate } from 'react-router-dom';

const NavLogo = () => {
    return (
      <img src={logo} alt="twitch tv" title="twitch tv" className="h-8 mr-3" />
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



export const Nav = () => {
    const { isLogged, logout } = useUserDetails();

    const navigate = useNavigate();

    const handleNavigateToAuth = () => {
      navigate("/auth")
    }

    const handleNavigateToSettings = () => {
      navigate("/settings")
    }

    const handleNavigateToChannels = () => {
      navigate("/channels")
    }

    const handleLogout = () => {
      logout();
    }
  return (
    <nav className="fixed z-30 w-full h-[60px] bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            
            
            <div className="flex ml-2 md:mr-24">
              <NavLogo />
              <NavButton text="Browse" onClickHandler={handleNavigateToChannels} />
            </div>
          </div>
          <div className="flex items-center">
            <ul className="flex flex-col mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {!isLogged ? (
                <NavButton text="login" onClickHandler={handleNavigateToAuth} />
              ) : (
                <>
                  <NavButton text="my account" onClickHandler={handleNavigateToSettings} />
                  <NavButton text="logout" onClickHandler={handleLogout} />
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

