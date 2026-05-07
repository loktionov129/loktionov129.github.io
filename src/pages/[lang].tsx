import type { GetStaticProps, GetStaticPaths } from 'next';
import { createStaticProps } from '@/utils/locale';
import { Header } from '@/components/Header';
import type { LangContextType } from '@/context';

export default function LangPage({ t, lang }: LangContextType) {
  if (!lang || !t) return null;

  return (
    <>
      <title>{t.header.title}</title>
      <Header />
      <main className='container'>
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
        <br />1
      </main>
      ftr
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { lang: 'en' } }, { params: { lang: 'ru' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<LangContextType> = async ({ params }) => {
  return await createStaticProps(params?.lang as string);
};
