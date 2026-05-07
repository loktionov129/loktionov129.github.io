import { useLang } from '@/hooks';
import { useEffect, useState } from 'react';

export const ThemePanel = () => {
<<<<<<< HEAD
  const { lang, t } = useLang();
=======
  const { t } = useLang();
>>>>>>> e4bba3b748b5bf0dddee64bd189e29057e1a1f1b
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

<<<<<<< HEAD
  if (!lang || !t) return null;

=======
>>>>>>> e4bba3b748b5bf0dddee64bd189e29057e1a1f1b
  const setDarkTheme = () => setTheme('dark');
  const setLightTheme = () => setTheme('light');

  return (
<<<<<<< HEAD
    <section className='Section scheme' aria-label={t.aside.theme.title}>
      <div className='H H_level_2'>{t.aside.theme.title}</div>
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
=======
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
>>>>>>> e4bba3b748b5bf0dddee64bd189e29057e1a1f1b
  );
};
