import { Aside } from '@/components/Aside';
import { LangContext, type LangContextType } from '@/context';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps<LangContextType>) {
  const { t, lang } = pageProps;

  return (
    t && (
      <LangContext.Provider value={{ lang, t }}>
        <div className='Page'>
          <article className='Page__Article'>
            <Component {...pageProps} />
          </article>
        </div>
        <Aside />
      </LangContext.Provider>
    )
  );
}
