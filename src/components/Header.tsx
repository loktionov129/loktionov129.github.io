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

  // Стили контролов: скругленные, компактные, без жестких границ между кнопками
  const navBox = 'flex p-1 rounded-xl bg-bg-tertiary border border-border w-full md:w-auto';
  const itemBase = 'flex-1 md:flex-none px-4 py-1.5 text-xs font-semibold transition-all duration-300 rounded-lg text-center whitespace-nowrap min-w-[60px] md:min-w-[80px]';
  const active = 'bg-bg-primary text-text-primary shadow-sm ring-1 ring-border/50';
  const inactive = 'text-text-secondary hover:text-text-primary';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-bg-secondary/80 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center">
        
        {/* Логотип: Увеличил tap-zone для мобилок */}
        <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent tracking-tighter cursor-default">
          {t.header.title}
        </h1>

        {/* Бургер: современный минимализм */}
        <button 
          onClick={toggleMenu} 
          className="p-2 md:hidden text-text-primary focus:outline-none"
          aria-label="Menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`h-0.5 bg-current transition-all duration-300 origin-left ${isOpen ? 'rotate-[42deg] w-[26px]' : 'w-full'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-full'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 origin-left ${isOpen ? '-rotate-[42deg] w-[26px]' : 'w-full'}`} />
          </div>
        </button>

        {/* Меню: Mobile First - выпадает сверху или плавно проявляется */}
        <div className={`
          ${isOpen ? 'flex animate-in fade-in slide-in-from-top-4' : 'hidden'} 
          md:flex flex-col md:flex-row items-center gap-6 w-full md:w-auto mt-6 md:mt-0
        `}>
          
          {/* Селектор языка */}
          <nav className={navBox}>
            <Link href="/ru.html" className={`${itemBase} ${lang === 'ru' ? active : inactive}`}>
              РУ
            </Link>
            <Link href="/en.html" className={`${itemBase} ${lang === 'en' ? active : inactive}`}>
              EN
            </Link>
          </nav>

          {/* Переключатель темы */}
          <div className={navBox}>
            <button 
              onClick={() => setTheme('dark')} 
              className={`${itemBase} ${theme === 'dark' ? active : inactive} flex items-center justify-center gap-2`}
            >
              <span className="text-[14px]">🌙</span>
              <span className="hidden sm:inline">{t.header.theme.dark}</span>
            </button>
            <button 
              onClick={() => setTheme('light')} 
              className={`${itemBase} ${theme === 'light' ? active : inactive} flex items-center justify-center gap-2`}
            >
              <span className="text-[14px]">☀️</span>
              <span className="hidden sm:inline">{t.header.theme.light}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
