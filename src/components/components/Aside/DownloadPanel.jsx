import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../store/Page/selectors';

function DownloadPanel({ locale }) {
  return (
    <section className='Section' aria-label={locale.downloadCv}>
      <div className='Center Download'>
        <div className='Center__Inner'>
          <a
            tabIndex='0'
            role='button'
            className='Button secondary'
            href='https://hh.ru/resume/518e3377ff104648720039ed1f683934474548?print=true'
          >
            {locale.downloadCv}
          </a>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  locale: getProfile(state).aside,
});

export default connect(mapStateToProps)(DownloadPanel);
