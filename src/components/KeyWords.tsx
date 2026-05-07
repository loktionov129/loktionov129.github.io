import { useLang } from '@/hooks';

export const KeyWords = () => {
  const { t } = useLang();
  return (
    t && (
      <section className='Section' aria-label={t.keywords.title}>
        <div className='H H_level_2'>{t.keywords.title}</div>
        <ul className='Chips Buzzwords'>
          {t.keywords.buzzWords.map((item) => (
            <li className={`static Chips__Item ${item.status}`} key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      </section>
    )
  );
};
