import { useLang } from '@/hooks';

export const AboutMe = () => {
  const { t } = useLang();
  return (
    t && (
      <section className='Section' aria-label={t.aboutMe.title}>
        <h2 className='H H_level_2'>{t.aboutMe.title}</h2>
        {t.aboutMe.facts.map((fact) => (
          <p key={fact}>
            {'- '}
            {fact}
          </p>
        ))}
      </section>
    )
  );
};
