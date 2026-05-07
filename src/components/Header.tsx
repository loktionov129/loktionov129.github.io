'use client';

import Link from 'next/link';
import { useLang } from '@/hooks';
import { useEffect, useState } from 'react';

export const Header = () => {
  const { lang, t } = useLang();
  const [theme, setTheme] = useState('dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  if (!lang || !t) return null;

  const toggleMenu = () => setIsOpen(!isOpen);

  const navBox =
    'grid grid-cols-2 rounded-lg border border-border overflow-hidden bg-bg-tertiary w-full md:w-[240px]';
  const itemBase =
    'cursor-pointer flex-1 md:flex-none px-4 py-2 text-sm font-medium transition-all duration-200 text-center min-w-[100px]';
  const active = 'bg-accent-blue text-text-primary shadow-inner';
  const inactive = 'text-text-secondary hover:bg-accent-blue/10';

  return (
    <header className='w-full border-b border-border bg-bg-secondary relative'>
      <div className='container mx-auto px-4 py-4 flex flex-wrap justify-between items-center'>
        {/* Logo */}
        <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent leading-none'>
          {t.header.title}
        </h1>

        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className='p-2 md:hidden text-text-primary focus:outline-none'
          aria-label='Toggle Menu'
        >
          <div className='w-6 h-5 relative flex flex-col justify-between'>
            <span
              className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>

        {/* Navigation Wrapper */}
        <div
          className={`
          ${isOpen ? 'flex' : 'hidden'} 
          md:flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4 md:mt-0
        `}
        >
          {/* Language Switcher */}
          <nav className={navBox}>
            <Link href='/ru.html' className={`${itemBase} ${lang === 'ru' ? active : inactive}`}>
              <span className='text-lg leading-none'>🇷🇺</span>
            </Link>
            <Link href='/en.html' className={`${itemBase} ${lang === 'en' ? active : inactive}`}>
              <span className='text-lg leading-none'>EN</span>
            </Link>
          </nav>

          {/* Theme Switcher */}
          <div className={navBox}>
            <button
              onClick={() => setTheme('dark')}
              className={`${itemBase} ${theme === 'dark' ? active : inactive}`}
            >
              ☀️ {t.header.theme.dark}
            </button>
            <button
              onClick={() => setTheme('light')}
              className={`${itemBase} ${theme === 'light' ? active : inactive}`}
            >
              🌙 {t.header.theme.light}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
