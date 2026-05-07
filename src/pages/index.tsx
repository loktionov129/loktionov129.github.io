import type { GetStaticProps } from 'next';
import { createStaticProps } from '@/utils/locale';
import type { LangContextType } from '@/context';
import LangPage from './[lang]';

// export default LangPage;

<<<<<<< HEAD
export default function Index(props: LangContextType) {
=======
export default function IndexPage(props: LangContextType) {
>>>>>>> e4bba3b748b5bf0dddee64bd189e29057e1a1f1b
  if (typeof window !== 'undefined') {
    /* eslint-disable react-hooks/immutability */
    window.location.href = '/ru.html';
  }
  return <LangPage {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  return await createStaticProps('ru');
};
