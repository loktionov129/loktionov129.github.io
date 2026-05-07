import { useLang } from '@/hooks';

export const AboutApp = () => {
  const { t } = useLang();

  return (
    t && (
      <section className='Section' aria-label={t.aboutApp.title}>
        <div className='H H_level_2'>{t.aboutApp.title}</div>
        <p>
          {t.aboutApp.description}{' '}
          <a href='https://github.com/miyaokamarina/cv'>https://github.com/miyaokamarina/cv</a>
        </p>
        <p>Built with&nbsp;Bun, React, Typescript and Next.JS</p>
      </section>
    )
  );
};
