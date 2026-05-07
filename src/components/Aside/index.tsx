import { DownloadPanel } from './DownloadPanel';
import { LangPanel } from './LangPanel';
import { ThemePanel } from './ThemePanel';

export const Aside = () => {
  return (
    <aside className='Aside no-print gte-l1'>
      <LangPanel />
      <ThemePanel />
      <DownloadPanel />
    </aside>
  );
};
