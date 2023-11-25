import { useState } from 'react';
import { Link } from 'react-router-dom';

import Beams from '../assets/images/beams.png';
import { NavBarData } from '../data/NavBarData';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const onClickToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const onClickDarkTheme = () => {
    document.documentElement.classList.toggle('dark');
    setDarkTheme(!darkTheme);
  };

  const onClickListItem = (sectionId) => {
    setActiveItem(sectionId);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className='top-0 sticky z-10 p-6 flex justify-between items-center backdrop-blur text-slate-900 font-semibold lg:py-0 dark:bg-slate-900 dark:text-slate-300'>
        <div className='absolute inset-x-0 bottom-0 mx-6 h-px bg-slate-900/5'></div>
        <div className=''>Paavamaani Manchala</div>
        <ul className={`${toggleMenu ? 'nav-flyout' : 'hidden lg:flex p-4'}`}>
          {NavBarData.map((item) => {
            return (
              <li
                key={item.text}
                className={`nav-list-item ${
                  activeItem === item.text && 'is-active'
                }`}
                onClick={() => onClickListItem(item.text)}
              >
                <Link to={item.url}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
        <div className='cursor-pointer' onClick={onClickDarkTheme}>
          {!darkTheme ? (
            <svg viewBox='0 0 24 24' fill='none' className='w-6 h-6'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z'
                className='fill-sky-400/20'
              ></path>
              <path
                d='m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z'
                className='fill-sky-500'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z'
                className='fill-sky-500'
              ></path>
            </svg>
          ) : (
            <svg
              viewBox='0 0 24 24'
              fill='none'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-6 h-6'
            >
              <path
                d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                className='fill-sky-400/20 stroke-sky-500'
              ></path>
              <path
                d='M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836'
                className='stroke-sky-500'
              ></path>
            </svg>
          )}
        </div>
        <div
          className='lg:hidden block w-6 h-6 cursor-pointer text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'
          onClick={onClickToggleMenu}
        >
          {toggleMenu ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
              />
            </svg>
          )}
        </div>
      </nav>
      <div className='relative -mt-[7rem] overflow-hidden px-[2rem] pt-[2rem]'>
        <img
          className='absolute left-1/2 top-0 -ml-[39rem] w-[113.125rem] max-w-none'
          src={Beams}
          alt=''
        />
        <div className='h-20'></div>
      </div>
    </>
  );
};

export default NavBar;
