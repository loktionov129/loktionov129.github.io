import { useLang } from '@/hooks';

export const DownloadPanel = () => {
  const { t } = useLang();
<<<<<<< HEAD
  if (!t) return null;

  return (
    <section className='Section' aria-label={t.aside.downloadCv}>
      <div className='Center Download'>
        <div className='Center__Inner'>
          <a
            tabIndex={0}
            role='button'
            className='Button secondary'
            href='https://hh.ru/resume/518e3377ff104648720039ed1f683934474548?print=true'
          >
            {t.aside.downloadCv}
          </a>
        </div>
      </div>
    </section>
=======

  return (
    t && (
      <section className='Section' aria-label={t.aside.downloadCv}>
        <div className='Center Download'>
          <div className='Center__Inner'>
            <a
              tabIndex={0}
              role='button'
              className='Button secondary'
              href='https://hh.ru/resume/518e3377ff104648720039ed1f683934474548?print=true'
            >
              {t.aside.downloadCv}
            </a>
          </div>
        </div>
      </section>
    )
>>>>>>> e4bba3b748b5bf0dddee64bd189e29057e1a1f1b
  );
};
