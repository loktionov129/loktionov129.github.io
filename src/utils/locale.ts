// import { promises as fs } from 'fs';
// import path from 'path';
import type { Locale } from '@/types';

async function getLocaleData(lang: string): Promise<Locale> {
  const data = await import(`../../public/assets/locales/${lang}.json`);
  return data.default;
  // const filePath = path.join(process.cwd(), 'public/assets/locales', `${lang}.json`);
  // const jsonData = await fs.readFile(filePath, 'utf8');
  // return JSON.parse(jsonData);
}

export const createStaticProps = async (lang = 'ru') => {
  const t = await getLocaleData(lang);

  return {
    props: {
      t,
      lang,
    },
  };
};
