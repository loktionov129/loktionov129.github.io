import React from 'react';

export default function DownloadPanel() {
  return (
    <section className="Section" aria-label="Скачать PDF">
      <div className="Center Download">
        <div className="Center__Inner">
          <a
            tabIndex="0"
            role="button"
            className="Button secondary"
            href="/assets/cv.aleksandr_loktionov.net-developer.pdf"
            download="cv.aleksandr_loktionov.net-developer.pdf"
          >
            Скачать PDF
          </a>
        </div>
      </div>
    </section>
  );
}
