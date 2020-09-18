import React from 'react';
import {connect} from 'react-redux';

function WorkExperience({title, list, responsibilities, techStack}) {
  return (
    <section className="Section" aria-label={title}>
      <h2 className="H H_level_2">{title}</h2>
      {list.map(item => (
        <section className="Section" aria-label={item.specialization} key={item.name}>
          <h3 className="H H_level_3">
            {item.specialization}
            <div className="Subtitle">
              <a href={item.link}>{item.name}</a>, {item.duration}</div>
          </h3>
          <p><strong className="Xps__Strong">{responsibilities}:</strong></p>
          <p>{item.description}</p>
          {item.stack && item.stack.length && (
            <>
              <br />
              <p>{techStack}:</p>
              {item.stack.map((line, index) => (
                <p key={index}>- {line}</p>
              ))}
            </>
          )}
        </section>
      ))}
    </section>
  );
}

const mapStateToProps = state => state.page.data.workExperience;

export default connect(mapStateToProps, null)(WorkExperience);
