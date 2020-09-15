import React from 'react';
import LangPanel from './LangPanel';
import ThemePanel from './ThemePanel';
import DownloadPanel from './DownloadPanel';

export default function Aside() {
  return (
    <aside className="Aside no-print gte-l1">
      <LangPanel/>
      <ThemePanel/>
      <DownloadPanel/>
    </aside>
  );
}
