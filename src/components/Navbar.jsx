import React, { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div
      className={`p-2 flex items-center shadow-md fixed top-0 left-0 right-0 z-10 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <a className="text-3xl sm:text-2xl md:text-3xl font-bold" href="#">
        <span className="text-indigo-600">fx</span>-Rates
      </a>
        {/* Hamburger Menu Button for Mobile */}
      <div className="ml-auto md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={darkMode ? 'white' : 'currentColor'}className="h-6 w-6">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round"d="M6 18L18 6M6 6l12 12"/> ) : (<path   strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:flex md:items-center ${
          isOpen ? 'flex flex-col mt-2' : 'hidden'
        } md:space-x-4 ml-auto`}
      >
        <a className="m-2 text-sm hover:border-black block md:inline-block" href="#">
          Home
        </a>
        <a className="m-2 text-sm hover:border-black block md:inline-block" href="#">
          Convert
        </a>
        <a className="m-2 text-sm hover:border-black block md:inline-block" href="#">
          Sign Up
        </a>
        <a className="m-2 text-sm hover:border-black block md:inline-block" href="#">
          Login
        </a>
      </div>

        {/* Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} className="ml-4 focus:outline-none">
        {darkMode ? (
          // Moon Icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

        ) : (
          // Sun Icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>

        )}
      </button>
    </div>
  );
}

export default Navigation;
