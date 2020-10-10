import React from 'react';
import {connect} from 'react-redux';

function AboutMe({title, facts}) {
  return (
    <section className="Section" aria-label={title}>
      <h2 className="H H_level_2">{title}</h2>
      {facts.map((fact, index) => (
        <p key={index}>- {fact}</p>
      ))}
    </section>
  );
}

const mapStateToProps = state => state.page.data[state.aSide.lang].aboutMe;

export default connect(mapStateToProps, null)(AboutMe);
