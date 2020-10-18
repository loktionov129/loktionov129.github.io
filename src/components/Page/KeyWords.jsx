import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../store/Page/selectors';

function KeyWords({ title, buzzWords }) {
  return (
    <section className="Section" aria-label={title}>
      <div className="H H_level_2">{title}</div>
      <ul className="Chips Buzzwords">
        {buzzWords.map((item) => (
          <li className={`static Chips__Item ${item.status}`} key={item.name}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
}

const mapStateToProps = (state) => getProfile(state).keywords;

export default connect(mapStateToProps, null)(KeyWords);
