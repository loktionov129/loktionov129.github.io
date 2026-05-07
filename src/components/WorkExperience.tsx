import { useLang } from '@/hooks';

export const WorkExperience = () => {
  const { t } = useLang();
  return (
    t && (
      <section className='Section' aria-label={t.workExperience.title}>
        <div className='H H_level_2'>{t.workExperience.title}</div>
        {t.workExperience.list.map((item) => (
          <section className='Section' aria-label={item.specialization} key={item.name}>
            <div className='H H_level_3'>
              {item.specialization}
              <div className='Subtitle'>
                <a href={item.link}>{item.name}</a>
                {', '}
                {item.duration}
              </div>
            </div>
            <p>
              <strong className='Xps__Strong'>{t.workExperience.responsibilities}:</strong>
            </p>
            {item.responsibilities.map((line) => (
              <p key={line}>
                {'- '}
                {line}
              </p>
            ))}
            {item.stack && item.stack.length && (
              <>
                <br />
                <p>{t.workExperience.techStack}:</p>
                {item.stack.map((line) => (
                  <p key={line}>
                    {'- '}
                    {line}
                  </p>
                ))}
              </>
            )}
          </section>
        ))}
      </section>
    )
  );
};
