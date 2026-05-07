import type { GetStaticProps } from 'next';
import { createStaticProps } from '@/utils/locale';
import type { LangContextType } from '@/context';
import LangPage from './[lang]';

// export default LangPage;

export default function IndexPage(props: LangContextType) {
  if (typeof window !== 'undefined') {
    /* eslint-disable react-hooks/immutability */
    window.location.href = '/ru.html';
  }
  return <LangPage {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  return await createStaticProps('ru');
};
