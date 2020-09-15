import React from 'react';

export default function ThemePanel() {
  return (
    <section className="Section scheme" aria-label="Color scheme">
      <h2 className="H H_level_2">Color scheme</h2>
      <div className="Buttons primary">
        <span role="button" tabIndex="0" data-scheme="dark" className="Buttons__Item checked">тёмное</span>
        <span role="button" tabIndex="0" data-scheme="light" className="Buttons__Item">светлое</span>
      </div>
    </section>
  );
}
