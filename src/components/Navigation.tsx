import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItems {
  path: string;
  label: string;
  icon?: string;
}

const navItems: NavItems[] = [
  { path: '/', label: 'Home', icon: '../assets/icons/home.svg' },
  { path: '/articles', label: 'Articles', icon: '../assets/icons/article.svg' },
  { path: '/blogs', label: 'Blogs', icon: '../assets/icons/blog.svg' },
  { path: '/classes', label: 'Classes', icon: '../assets/icons/class.svg' },
  { path: '/merch', label: 'Merch', icon: '../assets/icons/merch.svg' },
  { path: '/artworks', label: 'Artworks', icon: '../assets/icons/artworks.svg' },
];

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white   top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex md:justify-center justify-between items-center p-2">
        <div className='flex justify-center items-center space-x-2'>
          <img src="../assets/icons/logo.png" alt="Cutafig Logo" className="h-10 w-10" />
          <div>
            <h1 className="font-bold text-xl">Cutafig</h1>
            <p className="text-xs">words, art, and ideas in bloom</p>
          </div>

        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden   flex justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-black focus:outline-none">
            {isOpen ? (
              // Close icon

              <img src="../assets/icons/list.svg" alt="Close Menu" className="h-6 w-6" />
            ) : (
              // Hamburger icon
               <img src="../assets/icons/list.svg" alt="Close Menu" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>


      <div className="flex justify-center items-center px-4 py-3 md:py-4 md:px-8">


        {/* Desktop nav */}
        <ul className="hidden md:flex justify-evenly items-center space-x-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`
                  flex items-center space-x-2 px-3 py-2
                  relative transition-all duration-300 ease-in-out
                  hover:scale-105 hover:-translate-y-1
                  ${location.pathname === item.path
                    ? 'text-black font-semibold after:content-[""] after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-0.5 after:rounded-lg after:bg-gray-300'
                    : 'text-zinc-500 hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-1/4 hover:after:w-1/2 hover:after:h-0.5 hover:after:bg-gray-300'
                  }
                `}
              >
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className={`transition-all duration-300 h-5 w-5 ${location.pathname === item.path ? 'scale-110 brightness-0 saturate-100' : 'saturate-0'
                      }`}
                  />
                )}
                <p className="tracking-widest">{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>


      </div>

      {/* Mobile nav */}
      {isOpen && (
        <ul className="md:hidden absolute bg-white w-full shadow-md px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)} // close menu on click
                className={`
                  flex items-center space-x-2 px-3 py-2 rounded
                  transition-colors duration-300
                  ${location.pathname === item.path
                    ? 'text-black font-semibold bg-gray-100'
                    : 'text-zinc-500 hover:text-black hover:bg-gray-100'}
                `}
              >
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className={`h-5 w-5 transition-all duration-300 ${location.pathname === item.path ? 'brightness-0 saturate-100' : 'saturate-0'
                      }`}
                  />
                )}
                <p className="tracking-widest">{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
