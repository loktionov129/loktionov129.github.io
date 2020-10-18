import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../store/Page/selectors';

function WorkExperience({
  title, list, responsibilities, techStack,
}) {
  return (
    <section className="Section" aria-label={title}>
      <div className="H H_level_2">{title}</div>
      {list.map((item) => (
        <section className="Section" aria-label={item.specialization} key={item.name}>
          <div className="H H_level_3">
            {item.specialization}
            <div className="Subtitle">
              <a href={item.link}>{item.name}</a>
              {', '}
              {item.duration}
            </div>
          </div>
          <p>
            <strong className="Xps__Strong">
              {responsibilities}
              :
            </strong>
          </p>
          {item.description.map((line) => (
            <p key={line}>
              {'- '}
              {line}
            </p>
          ))}
          {item.stack && item.stack.length && (
            <>
              <br />
              <p>
                {techStack}
                :
              </p>
              {item.stack.map((line) => (
                <p key={line}>
                  {'- '}
                  {line}
                </p>
              ))}
            </>
          )}
        </section>
      ))}
    </section>
  );
}

const mapStateToProps = (state) => getProfile(state).workExperience;

export default connect(mapStateToProps, null)(WorkExperience);
