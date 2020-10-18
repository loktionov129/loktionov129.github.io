import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../store/Page/selectors';

function AboutApp({ title, description }) {
  return (
    <section className="Section" aria-label={title}>
      <div className="H H_level_2">{title}</div>
      <p>
        {description}
        {' '}
        <a href="https://github.com/miyaokamarina/cv">https://github.com/miyaokamarina/cv</a>
      </p>
      <p>Built with&nbsp;React, Redux and Next.JS</p>
    </section>
  );
}

const mapStateToProps = (state) => getProfile(state).aboutApp;

export default connect(mapStateToProps, null)(AboutApp);
