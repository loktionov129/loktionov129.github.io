import React from 'react';
import {connect} from 'react-redux';
import {getProfile} from '../../store/Page/selectors';

function DownloadPanel({locale}) {
  return (
    <section className="Section" aria-label={locale.downloadCv}>
      <div className="Center Download">
        <div className="Center__Inner">
          <a
            tabIndex="0"
            role="button"
            className="Button secondary"
            href="/assets/cv.aleksandr_loktionov.net-developer.pdf"
            download="cv.aleksandr_loktionov.net-developer.pdf"
          >
            {locale.downloadCv}
          </a>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  locale: getProfile(state).aside
});

export default connect(mapStateToProps)(DownloadPanel);
