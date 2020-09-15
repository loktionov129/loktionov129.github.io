import React from 'react';

export default function LangPanel() {
  return (
    <section className="Section language" aria-label="Language">
      <h2 className="H H_level_2">Language</h2>
      <div className="Buttons primary">
          <span role="button" tabIndex="0" className="Buttons__Item checked LangSwitcher__Item_lang_ru">
            <a href="/index.html">Русский</a>
          </span>
        <span role="button" tabIndex="0" className="Buttons__Item LangSwitcher__Item_lang_en">
            <a href="/index.en.html">English</a>
          </span>
      </div>
    </section>
  );
}
