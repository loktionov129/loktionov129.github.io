import Link from 'next/link';
import { useLang } from '@/hooks';

export const LangPanel = () => {
  const { lang, t } = useLang();

  return (
    t && (
      <section className='Section language' aria-label={t.aside.lang}>
        <div className='H H_level_2'>{t.aside.lang}</div>
        <nav className='Buttons primary'>
          <Link
            href='/ru.html'
            role='button'
            tabIndex={0}
            className={`Buttons__Item LangSwitcher__Item_lang_ru ${lang === 'ru' ? 'checked' : ''}`}
          >
            Русский
          </Link>
          <Link
            href='/en.html'
            role='button'
            tabIndex={0}
            className={`Buttons__Item LangSwitcher__Item_lang_en ${lang === 'en' ? 'checked' : ''}`}
          >
            English
          </Link>
        </nav>
      </section>
    )
  );
};
