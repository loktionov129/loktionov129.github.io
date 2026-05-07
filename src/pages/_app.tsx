<<<<<<< HEAD
import { Aside } from '@/components/Aside';
import { LangContext, type LangContextType } from '@/context';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps<LangContextType>) {
  const { t, lang } = pageProps;

  if (!t || !lang) return null;

  return (
    <LangContext.Provider value={{ lang, t }}>
      <div className='Page'>
        <article className='Page__Article'>
          <Component {...pageProps} />
        </article>
      </div>
      <Aside />
    </LangContext.Provider>
  );
=======
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
>>>>>>> e4bba3b748b5bf0dddee64bd189e29057e1a1f1b
}
