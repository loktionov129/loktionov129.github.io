import type { GetStaticProps, GetStaticPaths } from 'next';
import { createStaticProps } from '@/utils/locale';
<<<<<<< HEAD
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
=======
import { LangContext, type LangContextType } from '@/context';
import { Profile } from '@/components/Profile';
import { KeyWords } from '@/components/KeyWords';
import { WorkExperience } from '@/components/WorkExperience';
import { ProjectList } from '@/components/ProjectList';
import { AboutMe } from '@/components/AboutMe';
import { AboutApp } from '@/components/AboutApp';
import { Aside } from '@/components/Aside';

export default function LangPage({ lang, t }: LangContextType) {
  return (
    <LangContext.Provider value={{ lang, t }}>
      <title>CV — Aleksandr Loktionov</title>
      <div className='Page'>
        <article className='Page__Article'>
          <Profile />
          <div className='no-print'>
            <KeyWords />
            <WorkExperience />
            <ProjectList />
            <AboutMe />
            <AboutApp />
          </div>
          <div className='print'>
            <AboutMe />
            <ProjectList />
            <WorkExperience />
          </div>
        </article>
      </div>
      <Aside />
    </LangContext.Provider>
>>>>>>> e4bba3b748b5bf0dddee64bd189e29057e1a1f1b
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
