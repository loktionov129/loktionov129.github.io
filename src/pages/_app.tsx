import { LangContext, type LangContextType } from '@/context';
import type { AppProps } from 'next/app';
import '@/styles/app.css';

export default function App({ Component, pageProps }: AppProps<LangContextType>) {
  const { t, lang } = pageProps;

  if (!t || !lang) return null;

  return (
    <LangContext.Provider value={{ lang, t }}>
      <Component {...pageProps} />
    </LangContext.Provider>
  );
}
