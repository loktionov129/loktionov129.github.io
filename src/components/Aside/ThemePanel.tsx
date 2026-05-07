import { useLang } from '@/hooks';
import { useEffect, useState } from 'react';

export const ThemePanel = () => {
  const { t } = useLang();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const setDarkTheme = () => setTheme('dark');
  const setLightTheme = () => setTheme('light');

  return (
    t && (
      <section className='Section scheme' aria-label={t.aside.theme.title}>
        <h2 className='H H_level_2'>{t.aside.theme.title}</h2>
        <div className='Buttons primary'>
          <span
            role='button'
            tabIndex={0}
            data-scheme={theme}
            className={`Buttons__Item ${theme === 'dark' ? 'checked' : ''}`}
            onClick={setDarkTheme}
            onKeyDown={setDarkTheme}
          >
            {t.aside.theme.dark}
          </span>

          <span
            role='button'
            tabIndex={0}
            data-scheme={theme}
            className={`Buttons__Item ${theme === 'light' ? 'checked' : ''}`}
            onClick={setLightTheme}
            onKeyDown={setLightTheme}
          >
            {t.aside.theme.light}
          </span>
        </div>
      </section>
    )
  );
};
