import React from 'react';
import {connect} from 'react-redux';

function AboutApp({title, description}) {
  return (
    <section className="Section" aria-label={title}>
      <h2 className="H H_level_2">{title}</h2>
      <p>
        {description} <a href="https://github.com/miyaokamarina/cv">https://github.com/miyaokamarina/cv</a>
      </p>
      <p>Built with&nbsp;React, Redux, HSLuv color space, Twemoji.</p>
    </section>
  );
}

const mapStateToProps = state => state.page.data[state.aSide.lang].aboutApp;

export default connect(mapStateToProps, null)(AboutApp);
