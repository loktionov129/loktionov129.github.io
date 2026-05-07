import { useLang } from '@/hooks';

export const AboutMe = () => {
  const { t } = useLang();
  return (
    t && (
      <section className='Section' aria-label={t.aboutMe.title}>
        <div className='H H_level_2'>{t.aboutMe.title}</div>
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
