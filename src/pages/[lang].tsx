import type { GetStaticProps, GetStaticPaths } from 'next';
import { createStaticProps } from '@/utils/locale';
import type { LangContextType } from '@/context';
import { Profile } from '@/components/Profile';
import { KeyWords } from '@/components/KeyWords';
import { WorkExperience } from '@/components/WorkExperience';
import { ProjectList } from '@/components/ProjectList';
import { AboutMe } from '@/components/AboutMe';
import { AboutApp } from '@/components/AboutApp';

export default function LangPage() {
  return (
    <>
      <title>CV — Aleksandr Loktionov</title>
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
