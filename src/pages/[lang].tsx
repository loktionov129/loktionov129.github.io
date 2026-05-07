import type { GetStaticProps, GetStaticPaths } from 'next';
import { createStaticProps } from '@/utils/locale';
import type { LangContextType } from '@/context';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function LangPage({ t, lang }: LangContextType) {
  if (!lang || !t) return null;

  return (
    <>
      <title>CV — Aleksandr Loktionov</title>
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
      </main>
      <Footer />
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
