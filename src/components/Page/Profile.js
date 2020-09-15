import React from 'react';
import ProfilePrintable from './ProfilePrintable';
import ProfileNonPrintable from './ProfileNonPrintable';

export default function Profile() {
  return (
    <section className="Section HeadingSection" aria-label="Aleksandr Loktionov CV (.NET Developer)">
      <h1 className="H H_level_1">Aleksandr Loktionov CV (.NET Developer)</h1>
      <div className="print">
        <ProfilePrintable/>
      </div>
      <div className="no-print lte-s">
        <ProfileNonPrintable/>
      </div>
      <div className="no-print gte-m">
        <ProfileNonPrintable/>
      </div>
    </section>
  );
}
