import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  {
    text: 'Главная',
    path: '/',
  },
  {
    text: 'Спектакли',
    path: '/plays',
  },
  {
    text: 'Творческая группа',
    path: '/team',
  },
  {
    text: 'Новости',
    path: '/news',
  },
  {
    text: 'Контакты',
    path: '#contacts',
  },
];

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const navLinks = links.map(({ path, text }, index) => (
    <li key={index} className="inline-flex">
      <Link href={path}>
        <a
          className={`flex items-center w-full justify-end py-4 px-8 rounded-sm hover:bg-dawn hover:text-main transition-all duration-200 ease-in-out lg:w-auto ${
            router.pathname == path ? 'active' : ''
          }`}
          onClick={() => setIsVisible(!isVisible)}
        >
          {text}
        </a>
      </Link>
    </li>
  ));

  const buttonText = isVisible ? 'Закрыть' : 'Меню';

  return (
    <header
      className={`px-5 py-4 ${
        isVisible &&
        'h-screen w-full overflow-hidden absolute left-0 top-0 z-10 bg-night lg:relative'
      }`}
    >
      <nav className="flex flex-col h-full items-stretch lg:flex-row lg:justify-between leading-none">
        <div className="flex w-full justify-between lg:w-auto">
          <div className="flex flex-col">
            <span className="text-[32px] font-bold tracking-wider">
              ArtRusVek
            </span>
            <div className="text-sm text-zinc-500 tracking-wide">
              продюссерская компания
            </div>
          </div>
          <button
            className="rounded-lg border-zinc-400 border w-[116px] lg:hidden"
            onClick={() => setIsVisible(!isVisible)}
          >
            {buttonText}
          </button>
        </div>
        <ul
          className={`${
            isVisible ? 'flex' : 'hidden'
          } flex-col h-full justify-center lg:flex lg:flex-row lg:items-stretch lg:justify-start lg:h-auto`}
        >
          {navLinks}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

// items-center py-4 px-8 w-full text-right rounded-sm hover:bg-dawn hover:text-main transition-all duration-200 ease-in-out lg:text-left lg:w-auto